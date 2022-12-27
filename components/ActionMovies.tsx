import React, { useEffect } from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Home.module.css"

import { Pagination, Navigation } from "swiper";
import Image from 'next/image';

const ActionMovies = ({actionMovieNames,actionMovieYtIds, actionMovieBackdrops}:{actionMovieNames:string[],actionMovieYtIds:string[],actionMovieBackdrops:string[]}) => {
    const[hover, setHover]:[boolean, any] = useState(false)
    const[slides, setSlides]:[number, any] = useState(5)

    useEffect(()=>{
        // Altering the number of slides shown depending on the screensize

        if(window.innerWidth >= 1350) {
            setSlides(5)
        }else if(window.innerWidth >= 1000 && window.innerWidth < 1350){
            setSlides(4)
        }else if(window.innerWidth >= 500 && window.innerWidth < 1000){
            setSlides(3)
        }else if(window.innerWidth >= 350 && window.innerWidth < 500){
            setSlides(2)
        }else{
            setSlides(1)
        }

    }, [])

    return (
    <div className='w-[100%] bg-black text-white font-bold font-poppins'>
        <h1 className='text-2xl my-5 mt-3 ml-3'>Action</h1>
        <div className='mx-3'>
            <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">

            {
                actionMovieNames.map((movie, i)=>{
                    return(
                    <SwiperSlide>
                        <div className='border-2 border-white'>
                            <h1 className='text-center italic'>{movie}</h1>
                            <a className='' target="_blank" href={`https://www.youtube.com/embed/${actionMovieYtIds[i]}?autoplay=1&mute=0&loop=1&playlist=${actionMovieYtIds[i]}`}>
                                <img alt={movie} className='object-cover' src={`http://image.tmdb.org/t/p/w300${actionMovieBackdrops[i]}`} />
                            </a>
                        </div>
                    </SwiperSlide>)
                })
            }
            </Swiper>
        </div>
    </div>
  )
}

export default ActionMovies