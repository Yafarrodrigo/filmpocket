import Filters from '../Filters/Filters'
import MoviesListContainer from '../MoviesList/MoviesListContainer'
import { Box } from '@mui/material'
import { useMoviesStore } from '../../store/movies'
import { useEffect } from 'react'

export type Movie = {
  title: string
  year: number
  img: string
  rating: number
  genre: string
}
export type MoviesList = Movie[]

function Home() {

  const getMovies = useMoviesStore( state => state.getMovies)
  useEffect(() => {
    getMovies()
  }, [getMovies])
  
  const moviesList = useMoviesStore( state => state.filteredMovies)



  return (
    <Box sx={{width:'100vw', display:'flex'}}>
      <Filters />
      <MoviesListContainer movies={moviesList}/>
    </Box>
  )
}

export default Home