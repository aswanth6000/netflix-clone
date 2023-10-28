import React,{Suspense} from 'react'
import MainPageNav from './MainPageNav'
import MainpageBanner from './MainpageBanner'
import {actionUrl, animation, comedy, documentry } from '../constants/URL'
import './Mainpage.css'
import MainpageFooter from './MainpageFooter'
const LazyMainpageCarousel = React.lazy(()=>import('./MainpageCarousel'))

export default function MainpageWrapper() {
  return (
    <div className='font-montserrat'>
        <MainPageNav/>
        <MainpageBanner/> 
        <Suspense fallback={<div className='text-white'>Loading...</div>}>
        <LazyMainpageCarousel url={comedy} title="Comedy"/>
        <LazyMainpageCarousel url={actionUrl} title="Action" isSmall/>
        <LazyMainpageCarousel url={documentry} title="Documentery" isSmall/>
        <LazyMainpageCarousel url={animation} title="Animation"/>
        </Suspense>
        <MainpageFooter/>
    </div>
  )
}
