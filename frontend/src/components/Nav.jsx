import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return ( <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{backgroundColor: 'blue'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TODO LIST
        </Typography>
        <Link to={'/home'}><Button sx={{ color: 'white', border: 1}}>HOME</Button></Link>
        <Link to={'/add'}><Button sx={{ color: 'white', border: 1, margin: 2}}>ADD</Button></Link>
        <Link to={'/delete'}><Button sx={{ color: 'white', border: 1, margin: 2}}>DELETE</Button></Link>
        
        {/* <Button sx={{ color: 'white', border: 1, margin: 2}} onClick={clearUser}>DELETE</Button> */}
        


      </Toolbar>
    </AppBar>
  </Box>  <br /><br />
  </div>
  )
}

export default Nav