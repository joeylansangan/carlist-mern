import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar 
      position='sticky'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        px: 3,
        py: 2
      }}
      >
        <RouterLink to="/">
          <img src='./logo.svg' height='32px' width='auto'/>
        </RouterLink>
        <Box>
          <Link 
            href='https://github.com/joeylansangan/questboard'
            variant='h6'
            underline='hover'
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </Link>
        </Box>
        
    </AppBar>
  )
}

export default Navbar