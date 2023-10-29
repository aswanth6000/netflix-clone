import React, { useState } from 'react'
import openai from '../utils/openAI'

export default function GptSearchBar() {
  const [query, setQuery] = useState('');
  const handleClick = async () =>{
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    query +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        })
          console.log(gptResults);
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder= 'Enter your Query'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button onClick={handleClick} className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" >
          search 
      </button>
    </form>
  </div>
  )
}
