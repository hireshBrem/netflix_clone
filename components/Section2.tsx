import React from 'react'
import Image from 'next/image'
import section2Image from '../public/section2image.png'

const Section2 = () => {
  return (
    <div className='bg-black w-[100%] pt-10 absolute flex flex-wrap justify-center text-center text-white'>
        <div>
            <h1 className='text-3xl'>Watch everywhere.</h1>
            <h1 className='text-xl'>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV and without paying more.</h1>
        </div>
        <Image alt="section2_image" className="w-[700px]" src={section2Image}></Image>
    </div>
  )
}

export default Section2