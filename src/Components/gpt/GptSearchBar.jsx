import React from 'react'

export default function GptSearchBar() {
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder= 'iiiiii'
       
      />
      <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" >
          search 
      </button>
    </form>
  </div>
  )
}
