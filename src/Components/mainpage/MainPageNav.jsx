import React, { useEffect, useState } from 'react'
import './Mainpage.css'
export default function MainPageNav() {
    const [color, setColor] = useState('')
    const listenScrollEvent =()=>{
        if(window.scrollY > 50){
            setColor('rgba(0, 0, 0, 10)')
        }else{
            setColor('')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', listenScrollEvent)
    })
  return (
    <div className='container1' style={{backgroundColor:color}}>
  <div class="container mx-auto z-50">
    <nav class="flex items-center p-4 z-50">
      <div class="flex items-center justify-start p-4 ">
      <img className='logo' src='https://res.cloudinary.com/dihrwghx2/image/upload/v1698213282/netflix/d1auoakl5foipexqnytg.png' alt="" />
      </div>

      <div class="sm:hidden ml-56">
        <button id="open-menu" class="text-white">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div class="hidden sm:flex justify-start">
        <a href="/" class="noti">Home</a>
        <a href="/" class="noti">TVShows</a>
        <a href="/" class="noti">Movies</a>
        <a href="/" class="noti">Series</a>
      </div>
      <div className='profile hidden sm:flex justify-end w-full'>
        <img  src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
    </nav>
  </div>
</div>

  )
}
