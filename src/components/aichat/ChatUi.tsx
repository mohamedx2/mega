import { Textarea, Button, Switch, Slider, Select, SelectItem } from "@nextui-org/react"
import { useLayoutEffect, useRef, useState } from "react"
import { LuSend } from "react-icons/lu";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import { useAiChat } from "./aiChatProvider";

type chat = {
    message: string,
    sender: "human" | "ai",
}

export default function ChatUi(){
    const [content, setContent] = useState("")
    const [IsDisabled, setIsDisabled] = useState(false)
    const {addChat} = useAiChat()

    const shift = useRef(false)
    
    const sendReq = async ()=>{
        if(content  === "") return
        const human:chat = {message: content, sender: "human"}
        setContent('')
        addChat(human)
        setIsDisabled(true)

        axios.post("https://backray.onrender.com/api/api/ai", {content})
        .then((res)=>{
            const ai:chat = {message: res.data, sender: "ai"}
            addChat(ai)
        }).catch((err)=>{
            const ai:chat = {message: err.response.data, sender: "ai"}
            addChat(ai)
        })
        .finally(()=>{
            setIsDisabled(false)
        })
    }

    return(
        <>
            <div className="absolute bottom-0 w-full flex items-center">
                <Textarea
                    autoFocus
                    placeholder="Ask any question..."
                    variant="faded"
                    value={content}
                    onValueChange={(val)=>{
                        if(val !== "\n"){
                            setContent(val)
                        }
                    }}
                    onKeyDown={(key)=>{
                        if(!shift.current){
                            if(key.code === "ShiftLeft"){
                                shift.current = true
                            }
                            if(key.code === "Enter" && !IsDisabled){
                                sendReq()
                            }
                        }
                    }}
                    onKeyUp={(key)=>{
                        if(key.code === "ShiftLeft"){
                            shift.current = false
                        }
                    }}
                    minRows={2}
                    maxRows={3}
                    endContent={
                        <Button 
                            isDisabled={IsDisabled}
                            isIconOnly 
                            className={`text-xl ${content==='' ? "hidden":""}`}
                            variant="bordered"
                            onPress={sendReq}>
                            <LuSend/>
                        </Button>
                    }
                />
            </div>
        </>
    )
}