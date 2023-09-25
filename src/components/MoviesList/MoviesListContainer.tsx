import { MoviesList } from "../../store/moviesStore"
import MovieCard from "../Movie/MovieCard"
import { Stack, Box } from '@mui/material';

type MoviesListProps = {movies: MoviesList}

function MoviesListContainer({movies}:MoviesListProps) {
  
  return (
    <Stack direction={{xs: 'column', sm:'row'}} flexWrap={{xs:"initial",sm:'wrap'}} gap={'10px'} sx={{width: '100%', maxHeight:'92vh', margin:'10px', overflow:'auto'}} >
      {movies.map( (mov,index) => (
        <Box width={{xs:'100%',sm:'48%',md:'32%'}} key={index}>
          <MovieCard movieDetails={mov}/>
        </Box>
      ))}
    </Stack>
  )
}

export default MoviesListContainer