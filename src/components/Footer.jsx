import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Facebook } from '@mui/icons-material';
import '@fontsource/poppins';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bgcolor="#0B1D30"
      color="white"
      sx={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Navigation Links */}
      <Box display="flex" alignItems="center">
        {['Home', 'About', 'Services'].map((item, index) => (
          <Link
            key={index}
            href={`#${item.toLowerCase()}`}
            color="inherit"
            underline="none"
            sx={{ mr: 2 }}
          >
            {item}
          </Link>
        ))}
      </Box>

      {/* Address Section */}
      <Box textAlign="center">
        <Typography sx={{ fontFamily: 'Poppins, sans-serif' }}>
          2B/6, Sadayanikuppam Battai, Thiruvottiyur,
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins, sans-serif' }}>
          Chennai - 600019
        </Typography>
      </Box>

      {/* Social Media Icons */}
      <Box display="flex" alignItems="center">
        <IconButton
          href="https://www.linkedin.com/company/nks-events/"
          target="_blank"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/nks_events_/"
          target="_blank"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/nkseventmgt"
          target="_blank"
          color="inherit"
          sx={{ mx: 0.5 }}
        >
          <Facebook />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
