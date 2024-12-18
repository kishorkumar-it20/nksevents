import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Intro() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: 'center',
          mt: 8,
        }}
      >
        {/* Tagline */}
        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.9rem',
            color: '#ec5990',
            mb: 1,
          }}
        >
          Crafting Events Since 2019
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
            color: '#333',
            mb: 4,
          }}
        >
          You plan the event
          <br />
          We make it happen
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ec5990',
            borderRadius: '50px',
            px: 4,
            py: 1,
            fontSize: '1rem',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500',
            '&:hover': {
              backgroundColor: '#d44f80',
            },
          }}
        >
          Book Your Event
        </Button>
      </Box>

      {/* Images Section */}
            <Box
            sx={{
                mt: 8,
                display: 'flex',
                justifyContent: 'center',
                gap: 3, // Remove gap to allow overlapping
                flexWrap: 'wrap',
                position: 'relative', // Ensure positioning is relative to parent
            }}
            >
            {/* Image with border */}
            <Box
                component="img"
                src="image\event1.JPG"
                alt="Event Image 1"
                sx={{
                height: '270px',
                width: '200px',
                borderRadius: '20px',
                border: '3px solid yellow',
                transform: 'rotate(-15deg)',
                marginRight: '-50px', // Negative margin to overlap
                zIndex: 1, // Ensure correct stacking order
                }}
            />
            <Box
                component="img"
                src="image\event2.JPG"
                alt="Event Image 2"
                sx={{
                height: '270px',
                width: '200px',
                borderRadius: '20px',
                border: '3px solid purple',
                transform: 'rotate(0deg)',
                marginRight: '-50px',
                zIndex: 2,
                }}
            />
            <Box
                component="img"
                src="image\event3.jpg"
                alt="Event Image 3"
                sx={{
                height: '270px',
                width: '200px',
                borderRadius: '20px',
                border: '3px solid red',
                transform: 'rotate(15deg)',
                zIndex: 3,
                }}
            />
            </Box>

    </Container>
  );
}

export default Intro;
