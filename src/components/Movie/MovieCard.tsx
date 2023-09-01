import { Movie } from "../Home/Home"
//import styles from "./MovieCard.module.css"
import { Card, CardMedia, Box,Typography, CardContent } from "@mui/material"


type MovieProps = {
  movieDetails: Movie
}

function MovieCard({movieDetails}:MovieProps) {


  return (
    <Card elevation={6} sx={{display:'flex', width:'100%' , boxShadow:3}}>
      <Box sx={{width:'100px'}}>
        <CardMedia
          sx={{height:'100%', width:'100%'}}
          image={movieDetails.img}
          title={movieDetails.title}
        />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', width:'100%' }} >
        <Typography textAlign={'center'} sx={{backgroundColor:'#101010'}}>
          {movieDetails.title}
        </Typography>
        <CardContent>
          <Box component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis neque eius, culpa voluptates autem alias iste cum iusto, corrupti aspernatur a enim id voluptatem. Perferendis assumenda aliquam vitae fuga?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis neque eius, culpa voluptates autem alias iste cum iusto, corrupti aspernatur a enim id voluptatem. Perferendis assumenda aliquam vitae fuga?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis neque eius, culpa voluptates autem alias iste cum iusto, corrupti aspernatur a enim id voluptatem. Perferendis assumenda aliquam vitae fuga?
          </Box>
        </CardContent>
      </Box>
        
    </Card>
  )
}

export default MovieCard