import { Movie } from "../Home/Home"
import styles from "./MovieCard.module.css"
import StarRatingComponent from 'react-star-rating-component';


type MovieProps = {
  movieDetails: Movie
  key: number
}

function MovieCard({movieDetails}:MovieProps) {


  return (
    <div className={styles.movieCard}>
      <h3>{movieDetails.title}</h3>
      <img src="https://sothebys-md.brightspotcdn.com/dims4/default/a0d13ed/2147483647/strip/true/crop/1355x2000+0+0/resize/2048x3023!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Ff2%2F91%2F6b92ce8148109c1e030d9dd473c2%2Fl22899-c5mlg-cs.BLADERUNNER.jpg" alt="bladerunnerposter" />
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movieDetails.rating}
      />    
    </div>
  )
}

export default MovieCard