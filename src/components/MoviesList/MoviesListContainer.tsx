import { MoviesList } from "../Home/Home"
import MovieCard from "../Movie/MovieCard"
//import styles from "./MoviesList.module.css"
import { Grid } from "@mui/material"

type MoviesListProps = {movies: MoviesList}

function MoviesListContainer({movies}:MoviesListProps) {
  
  return (
    <Grid>
      {movies.map( (mov,index) => (
        <MovieCard key={index} movieDetails={mov} />
      ))}
    </Grid>
  )
}

export default MoviesListContainer