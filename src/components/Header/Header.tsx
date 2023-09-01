//import styles from "./headerStyles.module.css"
import {AppBar,Toolbar, Typography} from '@mui/material'

function Header() {
  return (
    <AppBar position="sticky" elevation={6} sx={{boxShadow:3}}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div"> FilmPocket </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header