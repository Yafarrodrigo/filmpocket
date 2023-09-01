import { Box, Stack, Select,InputLabel, MenuItem } from '@mui/material'

export default function Filters() {
  return (
    <Box sx={{width: '175px'}}>
      <Stack>
      <InputLabel id="genre-select">Genre</InputLabel>
        <Select defaultValue={'all'}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'aliens'} >Aliens</MenuItem>
          <MenuItem value={'space'} >Space</MenuItem>
          <MenuItem value={'timeTravel'} >Time Travel</MenuItem>
          <MenuItem value={'multiverse'} >Multiverse</MenuItem>
        </Select>
      <InputLabel id="year-select">Year</InputLabel>
        <Select defaultValue={'2020'}>
          <MenuItem value={'2020'}> &gt; 2020 </MenuItem>
          <MenuItem value={'2010'}> 2010 </MenuItem>
          <MenuItem value={'2000'}> 2000 </MenuItem>
          <MenuItem value={'1990'}> 1990 </MenuItem>
          <MenuItem value={'1980'}> 1980 </MenuItem>
          <MenuItem value={'1970'}> 1970 </MenuItem>
          <MenuItem value={'1960'}> 1960 </MenuItem>
          <MenuItem value={'1950'}> &lt; 1950 </MenuItem>
        </Select>
        <InputLabel id="rating-select">Rating</InputLabel>
        <Select defaultValue={'0'}>
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
