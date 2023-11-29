
import ChatInput from '@/components/ChatInput';
import Messages from '@/components/Messages';
import { Message } from '@/utils/types';
import { getServerSession } from 'next-auth/next';

export default async function Home() {

  const response = await fetch(`${process.env.VERCEL_URL ||'http://localhost:3000'}/getMessages`);
  const data = await response.json();
 
  const messages:Message[]= data.messages
  const session = await getServerSession()
  

  return (
    <main>
      {/* Messages */}
      <Messages initialMessages={messages } session={session} />

      {/* ChatInput */}
      <ChatInput session={session}/>
    </main>
  );
}
