import React from 'react'
import Image from 'next/image'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
const Header = () => {
    const session = true
    if(session)
    return(
<header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-md'>
        <div className='flex flex-col items-center space-y-5'>
            <div className='flex space-x-2 items-center'>
                <Image src='/0xNunana.jpg' alt='Logo' height={30} width={30} className='rounded-full mx-2 object-contain '/>
      <div>
        <p className='text-blue-600'>Logged in as:</p>
        <p className='font-bold text-lg'>Yao</p>
      </div>
            </div>
        </div>

        <LogoutButton/>
    </header>
)
  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-md'>
        <div className='flex flex-col items-center space-y-5'>
            <div className='flex space-x-2 items-center'>
                <Image src='/investtalk.png' alt='Logo' height={30} width={100} />
            <p className=''>Welcome to Investor Talks</p>
            </div>
            <LoginButton/>
        </div>
    
    </header>
  )
}

export default Header