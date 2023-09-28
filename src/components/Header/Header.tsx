import {AppBar,Toolbar, Typography, Box, InputBase, Button} from '@mui/material'
import { useMoviesStore } from '../../store/moviesStore';

function Header() {

  const filters = useMoviesStore( state => state.filters)
  const changeFilterValues = useMoviesStore( state => state.changeFilterValues)
  const updateFilteredMovies = useMoviesStore( state => state.updateFilteredList)
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    changeFilterValues('search', e.target.value)
    updateFilteredMovies()
  }

  const resetSearch = () => {
    changeFilterValues('search', '')
    updateFilteredMovies()
  }

  return (
    <AppBar position="sticky" elevation={6} sx={{boxShadow:3, width:'100vw'}}>
      <Toolbar sx={{ display: 'flex' }} >
        <Typography variant="h6" noWrap component="div"> FilmPocket </Typography>
        <Box display={{xs:'none',sm:'flex'}} width={{sm:'75%',md:'50%',lg:'35%'}} sx={{ marginLeft: 'auto'}}>
          <InputBase
          onChange={handleChange}
          sx={{flex: 1, fontSize: '1.3rem', width:'1000px', backgroundColor:'#1a1a1a', p:'0 15px', borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px'}}
          placeholder="Search by name, year, sub-genre..."
          inputProps={{ 'aria-label': 'search' }}
          autoFocus
          name='search'
          value={filters.search}
        />
        <Button onClick={resetSearch} sx={{padding: '15px', backgroundColor:'#222', borderRadius:'0', borderBottomRightRadius:'10px',borderTopRightRadius:'10px'}} >Reset</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header