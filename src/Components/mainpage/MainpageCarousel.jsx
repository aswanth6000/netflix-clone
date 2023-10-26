import React, { useEffect, useState } from 'react'
import './Mainpage.css'
import axios from '../../axios'
import { imgUrl } from '../constants/constants'
export default function MainpageCarousel(props) {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>[
      setMovie(response.data.results)
    ])
  })
  return (
    <div>
    <div className="heading m-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl  sm:font-semibold md:font-semibold lg:font-semibold text-white z-0 p-3" >
        <h2>{props.title}</h2>
    </div>
    <div className="container2 overflow-x-scroll overflow-y-hidden z-0">
        <div className='flex'>
          {movie.map((obj)=>(
            <img className={props.isSmall ? 'smallPoster' : 'poster' }  src={`${imgUrl + obj.poster_path}`} alt="" ></img>
          ))}
        </div>
    </div>
</div>
  )
}
