import { Movie } from "../Home/Home"
//import styles from "./MovieCard.module.css"
import { Card, CardMedia, CardContent,Typography } from "@mui/material"


type MovieProps = {
  movieDetails: Movie
}

function MovieCard({movieDetails}:MovieProps) {


  return (
    <Card>
      <CardMedia
        sx={{ width:250, height:500}}
        image={movieDetails.img}
        title={movieDetails.title}
      />
      <CardContent>
        <Typography textAlign={'center'}>
          {movieDetails.title}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default MovieCard