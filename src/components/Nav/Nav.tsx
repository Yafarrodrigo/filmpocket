import { Box, Stack, Button, Divider, ListItem } from '@mui/material'
import { useMoviesStore } from '../../store/moviesStore'

export default function Nav() {

  const allTags = useMoviesStore( state => state.allTags)

  return (
    <Box sx={{width: '100vw', backgroundColor: '#1e1e1e'}}>
        <Stack
            direction="row"
            justifyContent={'center'}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{margin:'auto', width: '75%', padding:'5px'}}
            >
              {allTags.map( (tag,index) => (
                <ListItem sx={{p:0}} key={index}>
                  <Button sx={{fontSize: '0.75rem'}} > {tag} </Button>
                </ListItem>
              ))}
        </Stack>
    </Box>
  )
}
