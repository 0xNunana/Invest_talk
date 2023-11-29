import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Providers } from '@/components/Provider'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '0xNunana | InvestorTalk',
  description: 'Realtime Messaging',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession()
  return (
    <html lang="en">
      
      <body className={inter.className}>

      <Providers session={session}>
              <Header/>
              <div className="flex h-screen overflow-hidden">
            <div className="w-[20%] h-[100vh] border-r-2 shadow-xl flex flex-col min-h-screen overflow-auto">
              {/* 'overflow-auto' allows the side nav to scroll if needed */}
              side
            </div>
            <div className="flex-grow overflow-auto">{children}</div>
            {/* 'overflow-auto' allows the right side to scroll if needed */}
          </div>

      
      </Providers>
   
        </body>
    </html>
  )
}
