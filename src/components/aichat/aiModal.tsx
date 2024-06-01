import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiChatProvider, useAiChat } from "./aiChatProvider";
import DeleteChatButton from "./deletchatbutton";
import ChatUi from "./ChatUi";
import AiChatArea from "./AiChatArea";

export default function AiModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <AiChatProvider  fetchedChat={null}>
        <Button isIconOnly onPress={onOpen} className='text-indigo-600 mx-8' variant='light' color='primary'>
            <AiOutlineInfoCircle className="size-8" />
        </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <div className="flex gap-1 items-center"><AiOutlineInfoCircle className="size-6" /> megatel ai</div>
                <DeleteChatButton/>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-[500px] pb-8 px-2">
                  <div className="w-full h-full relative min-h-[150px]">
                    <ChatUi/>
                    <div className="w-full h-full pb-16">
                      <AiChatArea/>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </AiChatProvider>
  );
}
