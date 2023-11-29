import React from 'react'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from '@/components/SignInComponent'

const page = async () => {
    const providers = await getProviders()
  return (
    <div>
        <div>
            <Image src='/logo1.png' alt='Github' width={70} height={70}/>
        </div>
        <SignInComponent providers={providers}/>
    </div>
  )
}

export default page