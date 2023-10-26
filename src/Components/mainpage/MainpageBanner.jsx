import React, { useEffect, useState } from 'react'
import './Mainpage.css'
import {API_KEY, imgUrl} from '../constants/constants';
import axios from '../../axios'
export default function MainpageBanner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/movie/week?api_key=${API_KEY}`)
    .then((response)=>{
      setMovie(response.data.results.sort(function(a, b){return 0.5 - Math.random()})[0])
    })
  },[])

  return (
    <div className='main2'>
        <div className="bg-center bg-cover w-auto flex flex-col h-96 sm:h-96 md:h-screen lg:h-screen xl:h-screen 2xl:h-screen relative " style={{backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ''})`}}>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black "></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black "></div>
        <div className="flex flex-col items-start mb-32 absolute mt-36 ml-4">
          <div>
          <h1 class="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-semibold md:font-extrabold lg:font-black text-white">{movie ? movie.title : ''}</h1>
          </div>
          <div >
            <button class="hover:bg-opacity-75 hover:bg-red-600 h-9 w-28 ml-1 mt-2 lg:mt-8 bg-opacity-75 lg:ml-1 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer">
              Play
            </button>
            <button class="hover:bg-opacity-75 hover:bg-red-600 h-9 w-28 ml-3 mt-2 lg:mt-8 bg-opacity-75 lg:ml-3 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer">
              Watchlater
            </button>
          </div>
          <div className='flex w-full sm:w-full md:w-full lg:w-849 xl:w-849 2xl:w-849'>
            <p  className="flex content-start text-base sm:text-xl md:text-2xl lg:text-3xl text-white pt-3 sm:pt-4 md:pt-5 w-5/6 sm:w-3/4 lg:w-3/4">
              {movie ? movie.overview : ''}
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}
