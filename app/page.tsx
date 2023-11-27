import ChatInput from '@/components/ChatInput'
import Messages from '@/components/Messages'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      {/* messages  */}
<Messages/>

      {/* input */}
      <ChatInput/>
    
    </main>
  )
}
