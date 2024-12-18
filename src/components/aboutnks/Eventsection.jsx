import React, { useState } from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import '@fontsource/poppins'; 

const events = [
  { title: 'Corporate Events', image1: 'image/event1.JPG', image2: 'image/event1.JPG' },
  { title: 'Gift Customization', image1: 'image/Coperate.png', image2: 'image/Coperate.png' },
  { title: 'Events Production', image1: 'image/decoration2.jpg', image2: 'image/decoration1.jpg' },
  { title: 'Networking Events', image1: 'image/event2.JPG', image2: 'image/event3.JPG' },
];

const Eventsection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container maxWidth="lg"> {/* Wrap the section in a Container for better centering */}
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '60vh', mt: 5, fontFamily: 'Poppins, sans-serif' }}
    >
      <Box textAlign={{ xs: 'center', md: 'left' }}>
        <Box sx={{ textAlign: 'center', mb: 1 }}> {/* Reduced margin-bottom */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, fontFamily: 'Poppins, sans-serif' }}> {/* Reduced margin-bottom */}
            Events We Organize
          </Typography>
        </Box>
        <Box textAlign={{ xs: 'center', md: 'left', mb: 2 }}> {/* Reduced margin-bottom */}
          <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif' }}>
            From corporate functions to social gatherings, we specialize in creating unforgettable events.
          </Typography>
        </Box>
      </Box>
  
      <Grid item xs={12} md={6}>
        <Box textAlign={{ xs: 'center', md: 'left' }}>  {/* Centers text on small screens */}
          {events.map((event, index) => (
            <Typography
              key={index}
              variant="h6"
              sx={{ mb: 3, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {event.title}
            </Typography>
          ))}
        </Box>
      </Grid>
  
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Box
          sx={{
            width: '300px',
            height: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={hoveredIndex !== null ? events[hoveredIndex].image2 : events[0].image1}
            alt="Event"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>
    </Grid>
  </Container>
  
  );
};

export default Eventsection;
