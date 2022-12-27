import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import netflixLogo from '../../public/netflix-logo.png'
import dynamic from 'next/dynamic'

import { GetServerSideProps } from 'next'

interface Data {
    mainMovieName:string,
    mainimageUrl:string,
    mainvideoUrl:string,
    moviesData:any[],
}

const index = ({mainMovieName, mainimageUrl, mainvideoUrl, moviesData}:Data) => {
    const {data:session} = useSession()
    let router = useRouter()

    const MainMovie = dynamic(()=>import("../../components/MainMovie").then(res=>res.default),{
        suspense:true
    })

    const MovieSection = dynamic(()=>import("../../components/MovieSection").then(res=>res.default),{
        suspense:true
    })

  useEffect(()=>{
    if(!session) {
      router.push("/signin")
    }
  }, [])

  return(
    <>
      <Head>
        <title>Browse | Netflix</title>
      </Head>
      <div className='text-white bg-black z-10 relative font-poppins'>
        <a href="/"><Image priority={true} alt="main-logo" className='w-36 ml-8 inline-block' src={netflixLogo}></Image></a>
        <button onClick={()=>{signOut()}} className="inline-block rounded-sm bg-red-600 p-2 float-right mt-5 mr-5">Sign Out</button>  
      </div>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <MainMovie mainMovieName={mainMovieName} imageUrl={mainimageUrl} videoUrl={mainvideoUrl} />
            <div className='h-[587px]'></div>
            <MovieSection movieGenre="Action" movies={moviesData[0].movies} />
            <MovieSection movieGenre='Adventure' movies={moviesData[1].movies} />
            <MovieSection movieGenre='Comedy' movies={moviesData[2].movies} />
            <MovieSection movieGenre='Family' movies={moviesData[3].movies} />
            <MovieSection movieGenre='Horror' movies={moviesData[4].movies} />
            <MovieSection movieGenre='Romance' movies={moviesData[5].movies} />
            <MovieSection movieGenre='Science Fiction' movies={moviesData[6].movies} />
            <MovieSection movieGenre='Thriller' movies={moviesData[7].movies} />
        </Suspense>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Data> = async (context) => {
    
    let mainName:string = ""
    let genres: number[] = [28, 12, 35, 10751, 27, 10749, 878, 53]
    let moviesData: any[] = []

    // List of genre id (Action = 28 / Adventure = 12 / Comedy = 35 / Family = 10751 / Horror = 27 / Romance = 10749 / Science Fiction = 878 / Thriller = 53)

    // To get main youtube video id (which later will be used to get the youtube trailer)
    const mainId = await fetch(`http://api.themoviedb.org/3/movie/550/videos?api_key=${process.env.API_KEY}`)
    .then((res)=>{
        return(res.json())
    })
    .then(data=>{
        if(data.success===false) {
            console.log("error")
        }else{
            mainName = data.results[0].name.split("Trailer")[0]
            return(data.results[0].key)
        }
    })

    // To get the main backdrop for the main movie
    const mainimage = await fetch(`http://api.themoviedb.org/3/movie/550/images?api_key=${process.env.API_KEY}`,{
      method: "GET"
    }).then(res=>{
        return(res.json())
    })
    .then(data=>{
        if(data.success===false){
            console.log("error")
        }else{
            return(data.backdrops[0].file_path)
        }
    })

    // Loop through genre ids
    for(let x = 0; x<genres.length; x++){

        // Returns list of movies with that specific genre
        let movieList = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genres[x]}`)
        .then(res=>res.json())
        .then(data=>{
            return(data.results)
        })
        
        // Create template object in the moviesData array
        moviesData.push({
            genreId: genres[x],
            movies: []             
        })

        // Loop through each movie in movieList and adding to movieData
        for(let i = 0; i<movieList.length; i++){

            // Must fetch separate resource for the youtube id
            let movieYtId = await fetch(`http://api.themoviedb.org/3/movie/${movieList[i].id}/videos?api_key=${process.env.API_KEY}`)
            .then((res)=>res.json())
            .then(data=>{
                if(data.results[0]!=undefined){
                  return(data.results[0].key)
                }else{
                    return(null)
                }
            })

            moviesData[x].movies.push({
                movieName: movieList[i].title,
                movieId: movieList[i].id,
                movieYtId: movieYtId,
                movieBackdrop: movieList[i].backdrop_path 
            })
        }
    }

    const data: Data = {
        mainMovieName: mainName, 
        mainimageUrl:mainimage, 
        mainvideoUrl: mainId, 
        moviesData: moviesData
    }

    return {
    props: 
      data,
    
  }
}

export default index