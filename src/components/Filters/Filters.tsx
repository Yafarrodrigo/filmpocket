import { Stack, Select,InputLabel, MenuItem, Button } from '@mui/material'
import { SelectChangeEvent } from "@mui/material";
import { useMoviesStore } from '../../store/moviesStore'

export const Filters = () => {

    const changeFilterValues = useMoviesStore( state => state.changeFilterValues)
    const updateFilteredMovies = useMoviesStore( state => state.updateFilteredList)
    const resetFilters = useMoviesStore( state => state.resetFilters)
    const getFilterValues = useMoviesStore( state => state.filters) 

    const handleChange = (e:SelectChangeEvent<unknown>) => {
      changeFilterValues(e.target.name, e.target.value as string)
      updateFilteredMovies()
    }


  return (
  <>
    <Button size='large' sx={{margin: '25px 10px', width: 'auto', fontSize:'0.9rem'}} onClick={resetFilters} variant="outlined">Reset Filters</Button>
    <Stack>
      <InputLabel id="genre-select">Sub-Genre</InputLabel>
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
          <MenuItem value={'0'}> All </MenuItem>
          <MenuItem value={'2020'}> 2020s  </MenuItem>
          <MenuItem value={'2010'}> 2010s  </MenuItem>
          <MenuItem value={'2000'}> 2000s  </MenuItem>
          <MenuItem value={'1990'}> 1990s  </MenuItem>
          <MenuItem value={'1980'}> 1980s  </MenuItem>
          <MenuItem value={'1970'}> 1970s  </MenuItem>
          <MenuItem value={'1960'}> 1960s  </MenuItem>
          <MenuItem value={'1950'}> ...1950s </MenuItem>
        </Select>
        <InputLabel id="rating-select">Rating</InputLabel>
        <Select onChange={handleChange} name='rating' value={getFilterValues.rating}>
          <MenuItem value={'0'}>All </MenuItem>
          <MenuItem value={'1'}>1 or more</MenuItem>
          <MenuItem value={'2'}>2 or more</MenuItem>
          <MenuItem value={'3'}>3 or more</MenuItem>
          <MenuItem value={'4'}>4 or more</MenuItem>
          <MenuItem value={'5'}>Only the best</MenuItem>
        </Select>
      </Stack>
    </>
  )
}

export default Filters