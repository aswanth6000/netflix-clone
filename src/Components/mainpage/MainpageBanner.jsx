import React from 'react'
import './Mainpage.css'
export default function MainpageBanner() {
  return (
    <div className='main2'>
        <div className="bg-center bg-cover flex flex-col h-96 relative">
          <div className="flex flex-col items-start mb-32 absolute mt-24 ml-4">
          <div>
          <h1 class="m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-semibold md:font-extrabold lg:font-black text-white">Forrest Gump</h1>
          </div>
          <div >
            <button class="hover:bg-opacity-75 hover:bg-red-600 h-9 w-28 ml-5 mt-2 lg:mt-8 bg-opacity-75 lg:ml-10 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer">
              Play
            </button>
            <button class="hover:bg-opacity-75 hover:bg-red-600 h-9 w-28 ml-5 mt-2 lg:mt-8 bg-opacity-75 lg:ml-10 bg-gray-600 rounded-lg text-white font-semibold cursor-pointer">
              Watchlater
            </button>
          </div>
          <div>
            <p class="text-xl md:text-2xl lg:text-5xl text-white p-3 md:p-4 lg:p-5 md:w-3/4 lg:w-96">
              Blahj aldkjflkjdlfkj kdjflkjasd 
            </p>
          </div>
          </div>
        </div>
    </div>
  )
}
