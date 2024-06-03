import { Button } from "@nextui-org/react"
import { useAiChat } from "./aiChatProvider"

export default function DeleteChatButton(){
    const {deletChat, chat} = useAiChat()
    return(
        <>
            {
                chat && chat.length > 0 ?
                <Button size="sm" color="danger" variant="light" onPress={deletChat}>
                    delete
                </Button>:null
            }
        </>
    )
}