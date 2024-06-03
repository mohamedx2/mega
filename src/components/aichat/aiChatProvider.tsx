import { aiChat } from "../../types/dbModelsTypes"
import axios from "axios"
import { createContext, useContext, useLayoutEffect, useState } from "react"
type chat = {
    message: string,
    sender: "human" | "ai",
}

const AiChatContext = createContext<{chat:chat[] | null, addChat:(chat:chat)=>void, deletChat:()=>void}>({chat:null, addChat:()=>{}, deletChat:()=>{}})

export function useAiChat(){
    return useContext(AiChatContext)
}

export function AiChatProvider({children, fetchedChat}:{children:React.ReactNode, fetchedChat:aiChat | null}){
    const [chat, setChat] = useState<chat[] | null>(null)

    const addChat = (newChat:chat) =>{
        setChat(prev=>{
            if(prev===null) return [newChat]
            return [...prev, newChat]
        })
    }

    useLayoutEffect(()=>{
        if(fetchedChat===null){
            setChat([])
            return
        }
        let dbChat:chat[] = []
        for(let i = 0; i < fetchedChat.chat.length; i++){
            dbChat.push({
                message:fetchedChat.chat[i].humman,
                sender:"human"
            })
            dbChat.push({
                message:fetchedChat.chat[i].ai,
                sender:"ai"
            })
        }
        setChat(dbChat)
    },[fetchedChat])

    const deletchat = ()=>{
        setChat([])
        // axios.delete(`api/ai?id=${fetchedChat?.id}`)
        // .then((res)=>{
        //     console.log(res.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        //     setChat(chat)
        // })
    }

    return(
        <AiChatContext.Provider value={{chat, addChat, deletChat:deletchat}}>
            {children}
        </AiChatContext.Provider>
    )
}