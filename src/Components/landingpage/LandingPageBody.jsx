import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'
export default function LandingPageBody() {
  return (
    <div className='bg'>
      <div class="h-screen max-h-full">
    <div class= "flex justify-between items-center">
    <img src="https://res.cloudinary.com/dihrwghx2/image/upload/v1698213282/netflix/d1auoakl5foipexqnytg.png"  class="h-20" alt="" />
      <button style={{ backgroundColor: 'rgb(229, 9, 20)' }} class="bg-custom-red-500 text-white rounded-md px-5 py-1.5 mr-14 font-semibold">Sign In</button>
    </div>
      <div class="flex justify-center flex-col mt-14 sm:mt-12 md:mt-24 lg:mt-56">
        <div class="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-semibold md:font-extrabold lg:font-black text-white">Laughter. Tears. Thrills. Find it all on Netflix.</div>
        <div class="text-2xl sm:text-2xl md:text-2xl lg:text-2xl sm:2xl md:2xl lg:2xl text-white">Endless entertainment starts at just ₹ 149. Cancel anytime.</div>
        <div  class="text-2xl sm:text-2xl md:text-2xl lg:text-2xl sm:2xl md:2xl lg:2xl text-white">Ready to watch? Enter your email to create or restart your membership.</div>
      </div>
      <div className='inp'>
        <input type="text" placeholder='Email Address' className='pl-2' />
       <Link to='/login'><button style={{ backgroundColor: 'rgb(229, 9, 20)' }} class="bg-custom-red-500 text-white rounded-md px-8 py-3.5 mr-14 font-semibold">Get Started </button> </Link> 
      </div>
      </div>
    </div>
  )
}
