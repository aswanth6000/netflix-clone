import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';


export default function GptSearch() {
  return (
    <>
    <div className="fixed -z-10">
        <img src='https://res.cloudinary.com/dihrwghx2/image/upload/v1698161581/netflix/ixuvbjsfsg7fj6zbfqcu.jpg' alt='bg-img' className="h-auto object-cover w-screen"/>
    </div>
    <div>
    <GptSearchBar />
    <GptMovieSuggestion />
    </div>
</>
  )
}
