import React from 'react'
import Image from 'next/image'
import section1Image from '../public/section1image.png'

const Section1 = () => {
  return (
    <>
    <div className='bg-black pt-10 flex flex-wrap justify-center text-center text-white'>
      <div className='my-5'>
        <h1 className='text-3xl'>Enjoy on your TV</h1>
        <h1 className='text-xl'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h1>
      </div>
      <Image alt="section1_image" className="w-[800px] mb-32" src={section1Image}></Image>
    </div>
    </>
  )
}

export default Section1