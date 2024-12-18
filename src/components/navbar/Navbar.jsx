import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import '@fontsource/poppins'; 
const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h6: {
        fontSize: '1.2rem', // Adjust this to your preferred size
      },
      button: {
        fontSize: '1rem', // Adjust this to your preferred size
      },
    },
  });
  
  const Navbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ my: 1 }}>
          <Toolbar>
            {/* Logo */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="image/nksLogo.png" alt="Logo" style={{ height: '40px' }} onClick={()=>navigate('/')} />
            </Typography>
  
            {/* Navigation Links */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="inherit" sx={{ mx: 2 }} onClick={() => navigate('/')}>
                Home
              </Button>
              <Button color="inherit" sx={{ mx: 2 }} onClick={() => navigate('/about')}>
                About
              </Button>
              <Button color="inherit" sx={{ mx: 2 }} onClick={handleClick}>
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'services-button',
                }}
                sx={{ mt: 2 }}
              >
                <MenuItem onClick={() => navigate('/corperate')}>Corporate Events</MenuItem>
                <MenuItem onClick={() => navigate('/network')}>Networking Events</MenuItem>
                <MenuItem onClick={() => navigate('/eventdecorat')}>Event Production</MenuItem>
                <MenuItem onClick={() => navigate('/customization')}>Gift Customization</MenuItem>
              </Menu>
            </Box>
  
            {/* Contact Button */}
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #e66465, #9198e5)',
                borderRadius: '10px',
                px: 4,   
              }}
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  };
  
  export default Navbar;
  