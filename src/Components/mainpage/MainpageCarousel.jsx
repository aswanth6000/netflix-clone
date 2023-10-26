import React from 'react'
import './Mainpage.css'
export default function MainpageCarousel() {
  return (
    <div>
    <div className="heading m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-semibold md:font-extrabold lg:font-black text-white z-0 p-3" >
        <h2>Action</h2>
    </div>
    <div className="container2 overflow-x-scroll overflow-y-hidden">
        <div className='flex'>
        <img className={'poster'}  src='https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' alt="" ></img>
        </div>
    </div>
</div>
  )
}
