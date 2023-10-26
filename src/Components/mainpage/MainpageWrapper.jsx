import React from 'react'
import MainPageNav from './MainPageNav'
import MainpageBanner from './MainpageBanner'
import MainpageCarousel from './MainpageCarousel'
import {actionUrl, animation, comedy, documentry } from '../constants/URL'
import './Mainpage.css'
import MainpageFooter from './MainpageFooter'

export default function MainpageWrapper() {
  return (
    <div className='font-montserrat'>
        <MainPageNav/>
        <MainpageBanner/> 
        <MainpageCarousel url={comedy} title="Comedy"/>
        <MainpageCarousel url={actionUrl} title="Action" isSmall/>
        <MainpageCarousel url={documentry} title="Documentery" isSmall/>
        <MainpageCarousel url={animation} title="Animation"/>
        <MainpageFooter/>
    </div>
  )
}
