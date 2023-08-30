import { MoviesList } from "../Home/Home"
import MovieCard from "../Movie/MovieCard"
//import styles from "./MoviesList.module.css"
import { Grid } from "@mui/material"

type MoviesListProps = {movies: MoviesList}

function MoviesListContainer({movies}:MoviesListProps) {
  
  return (
    <Grid container>
      {movies.map( (mov,index) => (
        <Grid item sx={{padding:1}} key={index}>
          <MovieCard movieDetails={mov} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MoviesListContainer