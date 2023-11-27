'use client'
import { Message } from '@/utils/types';
import React, { useState ,FormEvent} from 'react'
import { v4 as uuid } from 'uuid';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';


const ChatInput = () => {
    const [input,setInput]=useState('')
    //use swr to frequently and automatically retry to get the messages 
    const {data:messages,error,mutate}=useSWR('/getMessages',fetcher)

console.log(messages)

    const addMessage=async (e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()

if(!input)return
const messageToSend = input
setInput('')

//create a uuid to make the messages unique
const id = uuid()

const message:Message ={
    id,
    message:messageToSend,
    created_at:Date.now(),
    username:'Xing Chao',
    profilePic:'https://avatars.githubusercontent.com/u/94549530?v=4',
    email:'kudayapaul@gmail.com'
}

const uploadToUpstash=async ()=>{
    const data = await fetch('/addMessage',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({message})
    }).then(res=>res.json())
    return [data.message, ...messages!]

  
    console.log('Message Added',data)

}
//optimistic data, what we expect to see before it is returned from the server. 
//messagges typed will be the same as the one we will receive
await mutate (uploadToUpstash,{
    optimisticData:[message,...messages!],
    rollbackOnError:true
})

    } 



  return (
 <form onSubmit={addMessage}
 className='fixed w-full bottom-0 z-50 flex space-x-2 px-10 py-5 border-t border-gray-300'>
    <input type='text' placeholder='Enter message here...' 
    value={input}
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