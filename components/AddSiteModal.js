import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/db';
import {useRef} from 'react'

import { useForm } from "react-hook-form";

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

export default function AddSiteModal() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const auth = useAuth()

  function onCreateSite({site, url}){
    createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    })
    toast({
      title: 'Account created.',
      description: "We've added your site!.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    onClose()
  }

  return (
    <>
      <Button ml={4} ref={initialRef} onClick={onOpen}>
       Add your First site
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