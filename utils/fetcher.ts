import { Message } from "./types"

export const fetcher = async ()=>{
    const res = await fetch('/getMessages')
    const data = await res.json(); 
    const messages:Message[]=data.messages;

return messages
}