// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffbc0f' }}>
      <Toolbar>
        <Button onClick={toggleDrawer(true)} color="inherit" sx={{ minWidth: '48px', padding: '8px' }}>☰</Button> 
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SaveSmart
        </Typography>
        <Button variant="contained" color="warning" style={{ margin: '0 10px', fontWeight: 'bold' }}>
          LOGOUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
