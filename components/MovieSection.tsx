import React from 'react'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Home.module.css"

import { Pagination, Navigation } from "swiper";

interface MovieData {
    movieGenre: string,
    movies: any[]
}

const MovieSection = ({movieGenre, movies}:MovieData) => {
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
        <h1 className='text-2xl py-5 ml-3'>{movieGenre}</h1>
            <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <div className='flex flex-col mt-10'>
                {
                movies.map((movie, i)=>{
                    if(movie.movieBackdrop!=null){
                    return(
                    <SwiperSlide className='mb-10' key={i}>
                        <div className='border-2 border-white rounded-sm'>
                            <h1 className='text-center italic'>{movie.movieName}</h1>
                            <a className='' target="_blank" href={`https://www.youtube.com/embed/${movie.movieYtId}?autoplay=1&mute=0&loop=1&playlist=${movie.movieYtId}`}>
                                <img alt={movie.movieName} className='object-cover' src={`http://image.tmdb.org/t/p/w300${movie.movieBackdrop}`} />
                            </a>
                        </div>
                    </SwiperSlide>
                    )}
                })
                }
            </div>
            </Swiper>
    </div>
)}

export default MovieSection