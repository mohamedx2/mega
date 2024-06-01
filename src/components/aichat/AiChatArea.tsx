import { useLayoutEffect, useRef } from "react"
import AiResponse from "./AiResponse"
import HumanQuary from "./HumanQuary"
import { ScrollShadow, Skeleton, Spinner } from "@nextui-org/react"
import { useAiChat } from "./aiChatProvider"

type chat = {
    message: string,
    sender: "human" | "ai",
}

export default function AiChatArea(){
    const {chat} = useAiChat()
    const scrollableDivRef = useRef(null)
    useLayoutEffect(()=>{
        if (scrollableDivRef.current) {
            // @ts-ignore
            scrollableDivRef.current.scrollIntoView({behavior:"smooth"})
        }
    })
    console.log(chat)

    return(
        <>
            {   
                !chat ? 
                <div className="w-full h-full flex justify-center items-center text-foreground-500">
                    <Spinner size="lg" color="primary"  />
                </div> :
                chat && chat.length > 0 ?
                <ScrollShadow  className="h-full flex flex-col gap-2 px-5 py-100 overflow-y-auto max-h-[500px]">
                {
                    chat.map((item, index)=>{
                        if (item.sender === "human") return(
                            <HumanQuary key={index} query={item.message} />
                        )
                        else return(
                            <AiResponse key={index} response={item.message}/>
                        )
                    })
                }
                {
                    chat.length % 2 === 1 ? 
                    <div className="w-full flex flex-col gap-2 border p-4 rounded-lg">
                        <Skeleton className="h-3 w-full rounded-lg" />
                        <Skeleton className="h-3 w-full rounded-lg" />
                        <Skeleton className="h-3 w-[80%] rounded-lg" />
                    </div>
                    : null
                }
                <div ref={scrollableDivRef}></div>
            </ScrollShadow >:
            <div className="w-full h-full flex justify-center items-center text-foreground-500">
                <p>No chat...</p>
            </div>
            }
        </>
    )
}