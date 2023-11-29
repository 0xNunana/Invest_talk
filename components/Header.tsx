'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import SignInComponent from './SignInComponent'
import { getProviders, useSession ,signOut, signIn} from 'next-auth/react'

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    //const providers = await getProviders()
    const {data:session}=useSession()
 
    if(session)
    return(
        <header className='sticky top-0 z-50 h-[15vh] bg-white flex justify-between items-center p-10 shadow-md'>
            <div>
                <Image src='/logo.png' width={80} height={80} alt='Logo' className='rounded-full'/>
            </div>
        <div className='flex flex-col items-center space-y-5 relative'>
          <div className='flex space-x-2 items-center'>
            <div onClick={toggleDropdown} className='cursor-pointer'>
              <Image src={session?.user?.image!} alt='Logo' height={50} width={60} className='rounded-full mx-2 object-contain relative border-2 p-1'
               />
               <div className='h-4 w-4 rounded-full bg-green-400 absolute bottom-2 right-2'/>
            </div>
           
          </div>
          {isDropdownOpen && (
            <div className='absolute top-[80%] right-0  bg-white border border-red-200 rounded-md shadow-md'>
              {/* Dropdown content goes here */}
              <div>
  <div className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Notification</div>
              <hr/>
              <div className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Settings</div>
              <hr/>
              <button onClick={() => signOut()} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>
                Sign Out
              </button>
              </div>
            
            </div>
          )}
        </div>
      </header>
)
  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-md'>
        <div className='flex flex-col items-center space-y-5'>
            <div className='flex space-x-2 items-center'>
                <Image src='/investtalk.png' alt='Logo' height={30} width={100} />
            <p className=''>Welcome to Investor Talks</p>
            </div>
            {/* <SignInComponent /> */}
            <button onClick={()=>signIn()} className='bg-blue-500 px-5 py-3 rounded-md text-white'>Sign in</button>
        </div>
    
    </header>
  )
}

export default Header