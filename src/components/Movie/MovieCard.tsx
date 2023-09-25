import { Movie } from "../../store/moviesStore"
import { Card, CardMedia, Box,Typography, CardContent, Rating } from "@mui/material"


type MovieProps = {
  movieDetails: Movie
}

function MovieCard({movieDetails}:MovieProps) {


  return (
    <Card elevation={6} sx={{display:'flex', width:'100%' , boxShadow:3}}>
      <Box sx={{minWidth:'100px', cursor:'pointer'}}>
        <CardMedia
          sx={{height:'100%', width:'100%'}}
          image={movieDetails.img}
          title={movieDetails.title}
        />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', width:'100%' }} >
        <Box width={'100%'} display={'flex'} flexDirection={'column'} sx={{backgroundColor:'#101010', cursor:'pointer'}}>
          <Typography textAlign={'center'} >
            {`${movieDetails.title} (${movieDetails.year})`}
          </Typography>
          <Rating sx={{alignSelf: 'center'}} precision={0.5} value={movieDetails.rating} readOnly />
        </Box>
        <CardContent sx={{padding:'5px'}}>
          <Box component="div" height={'100px'} overflow={'hidden'} sx={{ textOverflow: 'ellipsis' }} >
            {movieDetails.desc}
          </Box>
        </CardContent>
      </Box>
        
    </Card>
  )
}

export default MovieCard