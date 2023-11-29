'use client'
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import MessageCard from './MessageCard';
import { clientPusher } from '@/utils/pusher';
import { Message } from '@/utils/types';



type props={
  initialMessages:Message[],
  session:any
}

const Messages = ({initialMessages,session}:props) => {
  const { data: messages, error, mutate } = useSWR<Message[]>('/getMessages', fetcher);

 
  useEffect(() => {
    const channel = clientPusher.subscribe('messages');
    channel.bind('new-message', async (data: Message) => {
      // if you sent the message, no need to update cache
      if (messages?.find((message) => message.id === data.id)) return;

      // if (!messages) {
      //   mutate(fetcher);
      // } else {
      //   mutate(fetcher, {
      //     optimisticData: [data, ...messages!],
      //     rollbackOnError: true,
      //   });
      // }
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  }, [messages, mutate]);

  return (
    
    <div className="space-y-5 px-5 pt-8 pb-32  mx-auto">
      {session && (<div> {messages?.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
</div>)}
     
     
   
    </div>
  );
};

export default Messages;
