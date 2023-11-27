'use client'
import React, { useState } from 'react'

const ChatInput = () => {
    const [input,setInput]=useState('')
  return (
 <form className='fixed w-full bottom-0 z-50 flex space-x-2 px-10 py-5 border-t border-gray-300'>
    <input type='text' placeholder='Enter message here...' 
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-x-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'/>
    <button type='submit' 
    disabled={!input}
    className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded
    disabled:opacity-50 disabled:cursor-not-allowed
    '>Send</button>
 </form>
  )
}

export default ChatInput