import { Box, Stack, Button, Divider } from '@mui/material'

export default function Nav() {
  return (
    <Box width={'100vw'} sx={{backgroundColor: '#1e1e1e'}}>
        <Stack
            direction="row"
            justifyContent={'center'}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{margin:'auto', width: '75%', padding:'5px'}}
            >
                <Button sx={{ width: '250px' }}> item 1 </Button>
                <Button sx={{ width: '250px' }}> item 2 </Button>
                <Button sx={{ width: '250px' }}> item 3 </Button>
                <Button sx={{ width: '250px' }}> item 4 </Button>
                <Button sx={{ width: '250px' }}> item 5 </Button>
        </Stack>
    </Box>
  )
}
