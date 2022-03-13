import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/db';
import fetcher from '@/utils/fetcher';
import {useRef} from 'react'

import { useForm } from "react-hook-form";
import useSWR, {mutate} from 'swr';

const {
  Button,
  FormControl,
  FormLabel, Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useDisclosure, } = require("@chakra-ui/react")

export default function AddSiteModal({children}) {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const { register, handleSubmit } = useForm();
  const auth = useAuth()
  const { data } = useSWR('/api/sites', fetcher)

  function onCreateSite({site, url}){
    //mutate('api/sites', { sites: [...data.sites, newSite] })

    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    }

    createSite(newSite)
    toast({
      title: 'Success.',
      description: "We've added your site!.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    mutate('/api/sites', async data => {
      return { sites: [...data.sites, newSite] }
    }, false)
    onClose()
  }

  return (
    <>
      <Button
        color='white'
        background='gray.900'
        fontWeight='medium'
        _hover={{bg: 'gray.700'}}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
        ref={initialRef}
        onClick={onOpen}>
       {children}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus ref={initialRef} placeholder='My site' {...register("site", { required: true })} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input placeholder='http://website.com' {...register("url", { required: true })} />
              </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight='medium'>Cancel</Button>
            <Button type='submit'  backgroundColor='#99FFFE' color='#194D4C' fontWeight='medium'>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}