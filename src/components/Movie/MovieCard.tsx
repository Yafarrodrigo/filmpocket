import { Movie } from "../Home/Home"
//import styles from "./MovieCard.module.css"
import { Card, CardMedia, CardContent,Typography } from "@mui/material"
import StarRatingComponent from 'react-star-rating-component';


type MovieProps = {
  movieDetails: Movie
  key: number
}

function MovieCard({movieDetails}:MovieProps) {


  return (
    <Card>
      <CardMedia
        sx={{ height: 90, width:160 }}
        image="https://sothebys-md.brightspotcdn.com/dims4/default/a0d13ed/2147483647/strip/true/crop/1355x2000+0+0/resize/2048x3023!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Ff2%2F91%2F6b92ce8148109c1e030d9dd473c2%2Fl22899-c5mlg-cs.BLADERUNNER.jpg"
        title={movieDetails.title}
      />
      <CardContent>
        <Typography>
          {movieDetails.title}
        </Typography>
      </CardContent>
    
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movieDetails.rating}
      />    
    </Card>
  )
}

export default MovieCard