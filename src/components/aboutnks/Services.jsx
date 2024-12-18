import React from 'react';
import { Box, Grid, Card, Typography, CardContent, Avatar } from '@mui/material';
import '@fontsource/poppins'; 

const services = [
  { title: 'Event Production', color: '#fbbc04', icon: 'image/service1.png' }, // Replace with actual icon paths
  { title: 'Networking', color: '#ff70a6', icon: 'image/network.png' },
  { title: 'Corperate Events', color: '#a682ff', icon: 'image/coperateicon.png' },
  { title: 'Gift Customization', color: '#75c9c8', icon: 'image/customize.png' },
];

const stats = [
  { label: 'Clients', value: '25+', icon: 'clients_icon_path' },
  { label: 'Events', value: '50+', icon: 'events_icon_path' },
  { label: 'Awards', value: '2', icon: 'awards_icon_path' },
];

const Services = () => {
  return (
    <Box sx={{ mt: 8, textAlign: 'center', px: 4 }}>
      {/* Heading Section */}
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
        We take care of
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif'}}>
        From venue scouting to event decorations,
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Poppins, sans-serif' }}>
       we offer everything you need for a perfect event.
      </Typography>

      {/* Services Section */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: service.color,
                height: '300px',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                ml:'50px'                
              }}
            >
              <Avatar src={service.icon} sx={{ width: 60, height: 60, mb: 2 }} />
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }}>{service.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Stats Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 8 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
                height: '250px',
                width: '450px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative', // Set position relative for absolute positioning
                ml:'50px'
              }}
            >
              {/* Avatar in top-left corner */}
              <Avatar
                src={stat.icon}
                sx={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}
              />

              {/* Label in top-right corner */}
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontWeight: 'bold',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {stat.label}
              </Typography>

              <CardContent sx={{ textAlign: 'center', mt: 5 }}> {/* Adjust margin to center the content */}
                <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Services;
