import Filters from '../Filters/Filters'
import { Box } from '@mui/material'


export default function SideBar() {

  return (
    <Box sx={{width: {md:'25%',lg:'15%'}, display:{xs:'none',sm:'block'}}}>
      <Filters />
    </Box>
  )
}
