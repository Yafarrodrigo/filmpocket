import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { Movie } from "../../store/moviesStore"
import { useMoviesStore } from '../../store/moviesStore';
import { Card, CardMedia, Box,Typography, CardContent, Rating } from "@mui/material"


type MovieProps = {
  movieDetails: Movie
}

function MovieCard({movieDetails}:MovieProps) {

  const favs = useMoviesStore( state => state.favoriteMovies)
  const favMovie = useMoviesStore( state => state.favMovie)
  const unfavMovie = useMoviesStore( state => state.unfavMovie)

  const handleFav = () => {
    if(favs.includes(movieDetails.title)){
      unfavMovie(movieDetails.title)
    }else{
      favMovie(movieDetails.title)
    }
  }

  return (
    <Card elevation={6} sx={{display:'flex', width:'100%' , boxShadow:3}}>
      <Box sx={{minWidth:'100px'}}>
        <CardMedia
          sx={{height:'100%', width:'100%'}}
          image={movieDetails.img}
          title={movieDetails.title}
        />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', width:'100%'}} >
        <Box width={'100%'} display={'flex'} flexDirection={'row'} sx={{backgroundColor:"#111"}}>
          <Box width={'100%'} display={'flex'} flexDirection={'column'} sx={{backgroundColor:'#101010', cursor:'pointer'}}>
            <Typography textAlign={'center'} >
              {`${movieDetails.title} (${movieDetails.year})`}
            </Typography>
            <Rating sx={{alignSelf: 'center'}} precision={0.5} value={movieDetails.rating} readOnly />
          </Box>
          <IconButton aria-label="add to favorites" sx={{minWidth:'50px'}} onClick={handleFav}>
            {favs.includes(movieDetails.title) ? <FavoriteIcon sx={{color:"rgb(225,75,75)"}}/> : <FavoriteBorderIcon sx={{color:"rgb(225,75,75)"}}/> } 
          </IconButton>
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