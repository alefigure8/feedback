import {useRef} from 'react'

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
  useDisclosure, } = require("@chakra-ui/react")

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()

  const createSite = (e) => {
    console.log(e.target);
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
        <ModalContent>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='My site' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder='http://website.com' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight='medium'>Cancel</Button>
            <Button onClick={ (e) => {createSite(e); onClose()}}  backgroundColor='#99FFFE' color='#194D4C' fontWeight='medium'>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}