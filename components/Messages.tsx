'use client'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

const Messages = () => {
  const {data:messages,error,mutate}=useSWR('/getMessages',fetcher)
  return (
    <div className='px-10 py-5'>
{messages?.map((message,index)=>(
<div key={message.created_at}>
  <p>{message.message}</p>
</div>
 
))}
     
    </div>
  )
}

export default Messages