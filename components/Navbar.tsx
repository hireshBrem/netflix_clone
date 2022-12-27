import React from 'react'
import Image from 'next/image'
import netflixLogo from '../public/netflix-logo.png'
import {useRouter} from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className='text-white z-10 relative'>
      <Image alt="main-logo" className='w-36 ml-8 inline-block' src={netflixLogo}></Image>
      <button onClick={()=>{router.push("/signin")}} className="inline-block rounded-sm bg-red-600 p-2 float-right mt-5 mr-5">Sign In</button>  
    </div>
  )
}

export default Navbar