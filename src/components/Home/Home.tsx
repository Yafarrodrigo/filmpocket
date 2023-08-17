import { useState } from 'react'
import MoviesListContainer from '../MoviesList/MoviesListContainer'

export type Movie = {
  title: string
  year: number
  img: string | null,
  rating: number
}
export type MoviesList = Movie[]

function Home() {

  const [moviesList,setMoviesList] = useState<MoviesList>([
    {title:"Blade Runner", img: null, year:1982, rating: 3},
    {title:"Blade Runner", img: null, year:1982, rating: 2},
    {title:"Blade Runner", img: null, year:1982, rating: 4},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 1},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 3},
    {title:"Blade Runner", img: null, year:1982, rating: 4},
    {title:"Blade Runner", img: null, year:1982, rating: 3},
    {title:"Blade Runner", img: null, year:1982, rating: 2},
    {title:"Blade Runner", img: null, year:1982, rating: 2},
    {title:"Blade Runner", img: null, year:1982, rating: 1},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
    {title:"Blade Runner", img: null, year:1982, rating: 5},
  ])

  return (
    <MoviesListContainer movies={moviesList}/>
  )
}

export default Home