import MoviesListContainer from '../MoviesList/MoviesListContainer'
import { Box } from '@mui/material'
import { useMoviesStore } from '../../store/moviesStore'
import { useEffect } from 'react'
import { MoviesList } from '../../store/moviesStore'
import SideBar from '../SideBar/SideBar'


function Home() {

  const getMovies = useMoviesStore( state => state.getMovies)
  useEffect(() => {
    getMovies()
  }, [getMovies])
  
  const moviesList:MoviesList = useMoviesStore( state => state.filteredMovies)



  return (
    <Box sx={{width:'100vw', display:'flex'}}>
      <SideBar />
      <MoviesListContainer movies={moviesList}/>
    </Box>
  )
}

export default Home