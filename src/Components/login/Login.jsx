import React from 'react'
import Navbar from '../mainpage/MainPageNav'

export default function Login() {
  return (
    <div>
      <Navbar/>
        <div className="absolute">
        <img className=" h-auto object-cover w-screen" src="https://res.cloudinary.com/dihrwghx2/image/upload/v1698161581/netflix/ixuvbjsfsg7fj6zbfqcu.jpg" alt='bg-img'/></div>
        <form className="w-full md:w-4/12 absolute p-12 bg-gray-900 my-28 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(event)=> event.preventDefault()}>
            <h1 className="font-bold text-3xl py-4"> Sign In</h1>
             <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md"  placeholder="Full name" /> 
            <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Email address" />
            <input type="password" className="p-4 my-4 w-full bg-gray-700 rounded-md border-none focus:border border-blue-700"  placeholder="Password" />
            <p className="text-red-500 font-bold text-lg py-2"></p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-md" >Sign In</button>
            <p className="p-4 cursor-pointer" ></p>
        </form>
        </div>
  )
}
