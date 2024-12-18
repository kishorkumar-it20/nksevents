import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import '@fontsource/poppins';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: 'social',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventTypeChange = (event, newEventType) => {
    setFormData({ ...formData, eventType: newEventType });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_o8p7mn6', // Replace with your EmailJS Service ID
        'template_mmjwh0d', // Replace with your EmailJS Template ID
        formData, // Pass the form data
        'Tuliml5NIMcYlDBqF' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 4,
          maxWidth: 1200,
          margin: 'auto',
          backgroundColor: '#fff',
          boxShadow: 3,
          borderRadius: 2,
          marginTop: '50px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} justifyContent="space-between">
            {/* Left Side - Contact Form */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Connect with us →
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Personal Information
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone No"
                    name="phone"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Event Type
                  </Typography>
                  <ToggleButtonGroup
                    value={formData.eventType}
                    exclusive
                    onChange={handleEventTypeChange}
                    fullWidth
                  >
                    <ToggleButton value="corporate">Corporate</ToggleButton>
                    <ToggleButton value="networking">Networking</ToggleButton>
                    <ToggleButton value="social">Social</ToggleButton>
                    <ToggleButton value="entertainment">Entertainment</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Your Message
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#ff4081',
                      color: '#fff',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#e91e63',
                      },
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={5}>
              <img
                src="image/event1.JPG"
                alt="Team"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
