import { useState } from 'react'
import Filters from '../Filters/Filters'
import MoviesListContainer from '../MoviesList/MoviesListContainer'
import { Box } from '@mui/material'

export type Movie = {
  title: string
  year: number
  img: string,
  rating: number
}
export type MoviesList = Movie[]

function Home() {

  const [moviesList,setMoviesList] = useState<MoviesList>([
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 3},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 2},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},
    {title:"Blade Runner", img: "https://culturageek.com.ar/wp-content/uploads/2022/06/Blade-Runner-poster-www.culturageek.com_.ar_.jpg", year:1982, rating: 4},

  ])

  return (
    <Box sx={{width:'100vw', display:'flex'}}>
      <Filters />
      <MoviesListContainer movies={moviesList}/>
    </Box>
  )
}

export default Home