//import styles from "./headerStyles.module.css"
import {AppBar,Toolbar, Typography, Box, InputBase, IconButton, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <AppBar position="sticky" elevation={6} sx={{boxShadow:3}}>
      <Toolbar sx={{ display: 'flex' }} >
        <Typography variant="h6" noWrap component="div"> FilmPocket </Typography>
        <Box display={'flex'} sx={{ marginLeft: 'auto'}}>
          <InputBase
          sx={{flex: 1, fontSize: '1.3rem', width:'1000px', backgroundColor:'#1a1a1a', p:'0 15px', borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px'}}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          autoFocus
        />
        <IconButton type="button" sx={{ p: '10px',backgroundColor:'#090909',borderBottomRightRadius:'10px',borderTopRightRadius:'10px',borderBottomLeftRadius:'0px',borderTopLeftRadius:'0px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button sx={{padding: '15px'}} >Reset</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header