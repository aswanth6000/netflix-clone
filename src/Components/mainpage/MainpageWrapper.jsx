import React from 'react'
import MainPageNav from './MainPageNav'
import MainpageBanner from './MainpageBanner'
import MainpageCarousel from './MainpageCarousel'
import './Mainpage.css'
import MainpageFooter from './MainpageFooter'

export default function MainpageWrapper() {
  return (
    <div className='font-montserrat'>
        <MainPageNav/>
        <MainpageBanner/> 
        <MainpageCarousel/>
        <MainpageFooter/>
    </div>
  )
}
