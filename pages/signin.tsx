import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

import mainimage from '../public/main.png'
import netflixLogo from '../public/netflix-logo.png'
import { useRouter } from 'next/router'

const signin = () => {
  const { data: session } = useSession()
	const[hasSession, setSession] = useState("")

  let router = useRouter()

	useEffect(()=>{
		if(session){
			router.push("/browse")
		}
	}, [])

  function click() {
    console.log(session)
    
  }

  return (
    <>
      <Head>
        <title>Sign In | Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <div>
        <Image className='absolute w-[100%] object-cover brightness-50 h-[720px]' src={mainimage} alt="Main_image"></Image>
        <div className='relative'>
          <a href='/'>
            <Image alt="main-logo" className='relative w-36 ml-8 inline-block' src={netflixLogo}></Image>
          </a>
          <div className='bg-zinc-800 text-white flex mt-24 pb-10 flex-col rounded-sm text-center px-10 flex-wrap justify-center max-w-sm m-auto shadow-2xl shadow-slate-600'>
            <h1 className='text-2xl my-10'>Log into your account and stream latest movies.</h1>
            {/* <input className='rounded-sm p-2 mb-2' placeholder='Email' required />
            <input className='rounded-sm p-2 mb-2' type="password" placeholder='Password' required />*/}
            <button onClick={()=>console.log(session)} className='bg-red-600 rounded-sm p-2'>Click</button> 

            {
              (session)?
                (<>
	                <h1>Signed in as {session.user?.email}</h1>
                  {/* <h1>Access Token {accessToken}</h1> */}
                  <button onClick={() => signOut()}>Sign out</button>
                </>)
              :(<button onClick={()=>{signIn();router.push("/browse")}} className='bg-red-600 rounded-sm p-2'>Sign In</button>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default signin