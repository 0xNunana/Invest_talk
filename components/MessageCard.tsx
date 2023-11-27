import { Message } from '@/utils/types'
import React from 'react'
import Image from 'next/image'


const MessageCard = ({message}:{message:Message}) => {
    const isUser = false ;
  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
        <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
            <Image src={message.profilePic} alt='Profile pic' height={10} width={50} className='rounded-full mx-2'/>
        </div> 
        <div>
        <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? 'text-blue-400 text-right':'text-red-400'} `}>{message.username}</p>
        <div className='flex flex-col'>
            <div className={`px-3 py-2 rounded-lg text-white ${isUser ? 'bg-blue-400 text-right ml-auto ':'bg-red-400'}  w-fit`}>
            <p>{message.message}</p>
            </div>
           <p className='text-[0.6rem] italic px-2 text-gray-400 text-right'>{new Date(message.created_at).toLocaleString()}</p>
        </div>
        </div>
 
    </div>
  )
}

export default MessageCard