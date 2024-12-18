import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
    { logo: 'image/cfc.png', title: 'Chennai Freelancer Club' },
    { logo: 'image/Heloo.png', title: 'Hello Techies' },
    { logo: 'image/EMC.png', title: 'Error Makes Clever' },
    { logo: 'image/pro editor.png', title: 'Pro Editors Club' },
    { logo: 'image/one yes.png', title: 'One Yes' },
    { logo: 'image/cfc.png', title: 'Chennai Freelancer Club' },
    { logo: 'image/Heloo.png', title: 'Hello Techies' },
    { logo: 'image/EMC.png', title: 'Error Makes Clever' },
    { logo: 'image/pro editor.png', title: 'Pro Editors Club' },
    { logo: 'image/one yes.png', title: 'One Yes' },
  ];

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box p={10} >
      <Typography variant="h4" align="center" gutterBottom>
        Our Clients
      </Typography>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <img
              src={client.logo}
              alt={client.name}
              style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, fontWeight: 500 }}
            >
              {client.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Clients;
