import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MainMovie = ({mainMovieName, imageUrl, videoUrl}:{mainMovieName:string, imageUrl:string, videoUrl:string}) => {
  const[hover, setHover] = useState(false)

  return (
    <div className='absolute w-[100%] font-poppins'>
      <h1 className='bg-transparent absolute z-10 text-white right-10 text-6xl mt-40 p-0' id="maintitle">{mainMovieName}</h1>
      <img 
      onMouseLeave={()=>{
        setHover(false)
        let el:any = document.getElementById("maintitle")?.style
        el.display="inline"        
        }} 
      onMouseEnter={()=>{
        setHover(true)
        let el:any = document.getElementById("maintitle")?.style
        el.display="none"
        }} alt="main-image" className='absolute hover:opacity-0 transition-opacity w-[100%] object-cover h-[600px] brightness-50' 
        src={`http://image.tmdb.org/t/p/w300${imageUrl}`} />
      {
        hover===true?
        (
        <iframe className='' id="mainVideo" src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=0&loop=1&playlist=${videoUrl}`}
          allow='autoplay; encrypted-media; fullscreen'
          title='video'
          width={`100%`}
          height={600}
        />)
        :console.log("hi")
      }
    </div>
  )
}

export default MainMovie