import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import bitLogo from '../assets/bit.png';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#697ba3', height: 80 }}>
      <Toolbar>
        <img src={bitLogo} alt="BIT Logo" style={{ height: 40, marginRight: 10 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#3c2676' }}>
          BIT CLASSROOM
        </Typography>
        <IconButton color='#4c2676'>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
