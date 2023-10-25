import React from 'react'
import MainPageNav from './MainPageNav'
import MainpageBanner from './MainpageBanner'
import './Mainpage.css'

export default function MainpageWrapper() {
  return (
    <div>
        <MainPageNav/>
        <MainpageBanner/> 
    </div>
  )
}
