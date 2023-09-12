import { Box, Stack, Select,InputLabel, MenuItem, Button } from '@mui/material'
import { SelectChangeEvent } from "@mui/material";
import { useMoviesStore } from '../../store/moviesStore'

export default function Filters() {

  const changeFilterValues = useMoviesStore( state => state.changeFilterValues)
  const updateFilteredMovies = useMoviesStore( state => state.updateFilteredList)
  const resetFilters = useMoviesStore( state => state.resetFilters)

  const handleChange = (e:SelectChangeEvent<unknown>) => {
    changeFilterValues(e.target.name, e.target.value as string)
    updateFilteredMovies()
  }

  const getFilterValues = useMoviesStore( state => state.filters) 
  return (
    <Box sx={{width: '200px'}}>
      <Button size='large' sx={{margin: '25px 10px', width: '90%', fontSize:'0.9rem'}} onClick={resetFilters} variant="outlined">Reset Filters</Button>
      <Stack>
      <InputLabel id="genre-select">Genre</InputLabel>
        <Select onChange={handleChange} name='genre' value={getFilterValues.genre}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'aliens'} >Aliens</MenuItem>
          <MenuItem value={'space'} >Space</MenuItem>
          <MenuItem value={'timeTravel'} >Time Travel</MenuItem>
          <MenuItem value={'multiverse'} >Multiverse</MenuItem>
          <MenuItem value={'futuristic'} >Futuristic</MenuItem>
        </Select>
      <InputLabel id="year-select">Year</InputLabel>
        <Select onChange={handleChange} name='year' value={getFilterValues.year}>
          <MenuItem value={'1'}> All </MenuItem>
          <MenuItem value={'2020'}> 2020 + </MenuItem>
          <MenuItem value={'2010'}> 2010 + </MenuItem>
          <MenuItem value={'2000'}> 2000 + </MenuItem>
          <MenuItem value={'1990'}> 1990 + </MenuItem>
          <MenuItem value={'1980'}> 1980 + </MenuItem>
          <MenuItem value={'1970'}> 1970 + </MenuItem>
          <MenuItem value={'1960'}> 1960 + </MenuItem>
          <MenuItem value={'1950'}> ...1950 + </MenuItem>
        </Select>
        <InputLabel id="rating-select">Rating</InputLabel>
        <Select onChange={handleChange} name='rating' value={getFilterValues.rating}>
          <MenuItem value={'0'}>rating &gt; 0</MenuItem>
          <MenuItem value={'1'}>rating &gt; 1</MenuItem>
          <MenuItem value={'2'}>rating &gt; 2</MenuItem>
          <MenuItem value={'3'}>rating &gt; 3</MenuItem>
          <MenuItem value={'4'}>rating &gt; 4</MenuItem>
          <MenuItem value={'5'}>rating &gt; 5</MenuItem>
        </Select>
      </Stack>
    </Box>
  )
}
