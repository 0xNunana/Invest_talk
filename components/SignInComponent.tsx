'use client'

import { getProviders } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import React from 'react'
type props={
    providers?:Awaited<ReturnType<typeof getProviders>>
}


const SignInComponent = ({providers}:props) => {
  return (
    <div>
        {Object.values(providers!).map((provider)=>(
            <div key={provider.name}>
                <button onClick={()=>signIn(provider.id)} className='rounded-md border px-5 py-2'>
                    Sign in with {provider.name}
                </button> 
            </div>
        ))}
    </div>
  )
}

export default SignInComponent