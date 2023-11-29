'use client'
import { Message } from '@/utils/types';
import React, { useState ,FormEvent} from 'react'
import { v4 as uuid } from 'uuid';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';



const ChatInput = ({session}:any) => {
    const [input,setInput]=useState('')
    //use swr to frequently and automatically retry to get the messages 
    const {data:messages,error,mutate}=useSWR('/getMessages',fetcher)
   // const {data:session}=useSession()



    const addMessage=async (e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()

if(!input || !session)return
const messageToSend = input
setInput('')

//create a uuid to make the messages unique
const id = uuid()


const message: Message = {
    id,
    message: messageToSend,
    created_at: Date.now(),
    username: session?.user?.name! ,
    //username:'Edna',
     profilePic:   session?.user?.image!,
    //profilePic:'https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/278329614_1454817041623262_6281369436436377023_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJXbeZ5qxuRd7n6ISuq-2tmSiFUMUf2GSZKIVQxR_YZB-MTvJSnqd5t-W7MbEYFmgzq8gAQX1RraOKJGgP8FHH&_nc_ohc=-9roRZ2phioAX9KvL9j&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&oh=00_AfBSi9q20jhIF3dGZX2JweTtqx6z7w-3kkuuaejShZRv6A&oe=656C3933',
    email: session?.user?.email!,
    //email:'EdnaAnnan@gmail.com'
  };


const uploadToUpstash=async ()=>{
    const data = await fetch('/addMessage',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({message})
    }).then(res=>res.json())


    return [data.message, ...messages!]

  

}
//optimistic data, what we expect to see before it is returned from the server. 
//messagges typed will be the same as the one we will receive
// if(messages){
//     await mutate (uploadToUpstash,{
//         optimisticData:[...messages,message],
//         rollbackOnError:true
//     })
  
// }


uploadToUpstash()
    } 



  return (
 <form onSubmit={addMessage} 
 className='fixed w-[80%] bottom-0 bg-white z-50 flex space-x-2 px-10 py-5 border-t border-gray-300 '>
    <input type='text' placeholder='Enter message here...' 
    value={input}
    disabled={!session}
    onChange={(e)=>setInput(e.target.value)}
    className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-x-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'/>
    <button type='submit' 
    disabled={!input}
    className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded
    disabled:opacity-50 disabled:cursor-not-allowed
    '>Send</button>
 </form>
  )
}

export default ChatInput