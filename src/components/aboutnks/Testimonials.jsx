import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/poppins';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jaya Shakti Kannan',
      title: 'IoT Architect',
      testimonial: 'NKS Event Management exceeded all our expectations! Their attention to detail and innovative approach brought our vision to life flawlessly. From start to finish, they handled everything with professionalism and creativity, ensuring our event was truly unforgettable.',
      image: 'path_to_image1.jpg'
    },
    {
      id: 2,
      name: 'Hr Navin',
      title: 'HR',
      testimonial: 'Working with NKS Event Management was an absolute pleasure. They took the time to understand our needs and delivered a seamless, beautifully executed event. Their passion and dedication were evident in every detail, making our experience stress-free and memorable.',
      image: 'path_to_image2.jpg'
    },
    {
      id: 3,
      name: 'Aravind',
      title: 'Software Engineer',
      testimonial: 'The team at NKS Event Management is top-notch! Their expertise and personalized approach made our event stand out in every way. They took care of everything, allowing us to relax and enjoy the moment. We highly recommend them for any event planning needs.',
      image: 'path_to_image3.jpg'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Card = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    textAlign: 'center',
    backgroundColor: '#FCE4EC',
    borderRadius: '16px',
    maxWidth: '350px',
    margin: '0 auto', // Center the card
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      maxWidth: '300px', // Adjust card size for smaller screens
    },
  }));

  return (
    <div style={{ padding: '20px 0', margin: '30px 10px', overflow: 'hidden', maxWidth: '100vw' }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontFamily: 'Poppins, sans-serif', 
          fontSize: { xs: '1.5rem', md: '2.125rem' }, 
        }}
      >
        What our clients say
      </Typography>

      <Slider {...settings} style={{ maxWidth: '100vw', overflow: 'hidden' }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Card>
              <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 } }} 
                  />
                </Grid>
                <Grid item>
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: { xs: '1rem', md: '1.25rem' }, 
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="secondary" 
                    sx={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: { xs: '0.875rem', md: '1rem' }, 
                    }}
                  >
                    {testimonial.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    sx={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: { xs: '0.75rem', md: '0.875rem' }, 
                    }}
                  >
                    {testimonial.testimonial}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
