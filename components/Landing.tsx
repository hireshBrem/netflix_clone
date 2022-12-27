import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Landing = () => {
  let router = useRouter()

  const[email, setEmail] = useState("")

  return (
    <>
    <div className='relative z-10 text-white flex flex-col mx-2 text-center mt-44 mb-[200px]'>
      <h1 className='text-4xl'>Unlimited films, TV programmes and more.</h1>
      <h3 className='text-2xl'>Watch anywhere. Cancel at any time.</h3>
      <h3 className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className='flex justify-center mt-5'>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email address' className='text-black px-6 py-4 rounded-sm' />
        <button onClick={()=>{
          router.push({
            pathname: '/signup',
            query: { email:email },
          })
        }} className='p-2 rounded-sm bg-red-600'>Get Started {'>'}</button>
      </div>
    </div>
    </>
  )
}

export default Landing