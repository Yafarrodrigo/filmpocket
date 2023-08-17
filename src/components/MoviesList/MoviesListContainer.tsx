import { MoviesList } from "../Home/Home"
import MovieCard from "../Movie/MovieCard"
import styles from "./MoviesList.module.css"

type MoviesListProps = {movies: MoviesList}

function MoviesListContainer({movies}:MoviesListProps) {
  
  return (
    <div id={styles.moviesListContainer}>
        {movies.map( (movie,i) => (
          <MovieCard key={i} movieDetails={movie}/>
        ))}
      </div>
  )
}

export default MoviesListContainer