import { MoviesList } from "../Home/Home"
import MovieCard from "../Movie/MovieCard"
//import styles from "./MoviesList.module.css"
import { Stack, Box } from '@mui/material';

type MoviesListProps = {movies: MoviesList}

function MoviesListContainer({movies}:MoviesListProps) {
  
  return (
    <Stack direction={'column'} spacing={'10px'} sx={{width: '100%', height:'92vh', margin:'10px', overflow:'auto'}} >
      {movies.map( (mov,index) => (
        <Box key={index}>
          <MovieCard movieDetails={mov}/>
        </Box>
      ))}
    </Stack>
  )
}

export default MoviesListContainer