import React, { useEffect, useState } from 'react'
import './Mainpage.css'
export default function MainPageNav() {
    const [color, setColor] = useState('')
    const listenScrollEvent =()=>{
        if(window.scrollY > 200){
            setColor('rgba(0, 0, 0, 10)')
        }else{
            setColor('')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', listenScrollEvent)
    })
  return (
    <div className='main'  style={{backgroundColor:color}}>
    <div className="title">
    <img className='logo' src='https://res.cloudinary.com/dihrwghx2/image/upload/v1698213282/netflix/d1auoakl5foipexqnytg.png' alt="" />
    </div>
    <div className="noti">
       <a href="/home">Home</a>  <a href="/abt">TVShows</a>   <a href="/con">Movies</a>  <a href="/con">Series</a> 
   
    </div>
    <div className="profile">
    <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'alt="" />
    </div>
</div>
  )
}
