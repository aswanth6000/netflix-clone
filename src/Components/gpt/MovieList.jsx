import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList() {
  return (
    <div className="px-6 ">
    <h1 className="text-lg md:text-2xl py-4 text-white">Bullet Train</h1>
    <div className="flex overflow-x-scroll scrollbar-hide">
      <div className="flex">
          <MovieCard  />
      </div>
    </div>
  </div>
  )
}
