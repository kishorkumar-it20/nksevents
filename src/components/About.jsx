import React from 'react';
import { Box, Typography, IconButton, Card, CardContent, Avatar } from '@mui/material';
import { Facebook, Instagram, LinkedIn, WhatsApp, EmojiEvents, CalendarToday } from '@mui/icons-material';
import '@fontsource/poppins'; 

const members = [
  { id: 1, bgColor: '#FEE2E2', image: 'image/founder.png', name:'Shanmuga Raj', position:'Founder' },
  { id: 2, bgColor: '#E0E7FF', image: 'image/anchor.png', name:'Shreeranjana', position:'EMCE'  },
  { id: 3, bgColor: '#FED7E2', image: 'image/contentwriter.png', name:'Aravind', position:'Content Creator'  },
  { id: 4, bgColor: '#FEF3C7', image: 'image/videographer.png', name:'Ganesh', position:'Videographer'  },
];
const socialLinks = {
  Facebook: 'https://www.facebook.com/nkseventmgt',
  Instagram: 'https://www.instagram.com/nks_events_/',
  Twitter: 'https://www.linkedin.com/company/nks-events/',
  WhatsApp: 'https://wa.me/8825767852', // Use international phone format without spaces or special characters
};

const About = () => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems="center" p={6} lg={{ p: 12 }}>
      {/* Left Section */}
      <Box width={{ xs: '100%', lg: '50%' }} p={6} lg={{ p: 12 }} bgcolor="grey.100" borderRadius={2} boxShadow={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'Poppins, sans-serif' }}>About Us</Typography>
          <IconButton href="#" sx={{ ml: { xs: 4, lg: 10 } }}>
            <Typography variant="h5" color="text.secondary">→</Typography>
          </IconButton>
        </Box>
        <Typography mt={4} color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif' }}>
        NKS Event Management is a leading event architect company that specializes in innovative event planning, ensuring every detail is meticulously designed to create exceptional events. 
        Our team of experts is passionate about crafting unforgettable experiences that elevate your events to new heights.
         We offer professional and personalized event management services, tailored to meet your unique needs and objectives. 
         With a focus on dedication and creativity, we strive to deliver seamless and memorable experiences for our clients. 
        Contact us today to learn more about our services and how we can help you achieve your event goal.
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="start" mt={6} gap={2}>
          {members.map((member) => (
            <Box
              key={member.id}
              display="flex"
              flexDirection="column"
              alignItems="center"
              bgcolor={member.bgColor}
              p={2}
              borderRadius={2}
              boxShadow={2}
            >
              <Avatar
                variant="rounded"
                sx={{ width: 96, height: 128, mb: 1 }}
                src={member.image}
                alt={member.name}
              />
              <Typography variant="subtitle1" align="center" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {member.name}
              </Typography>
              <Typography variant="body2" align="center" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {member.position}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h4" fontWeight="bold" mt={6} lg={{ mt: 10 }} sx={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us on</Typography>
        <Box display="flex" gap={2}>
                    {[Facebook, Instagram, LinkedIn, WhatsApp].map((Icon, index) => {
                      const socialName = Object.keys(socialLinks)[index];
                      return (
                        <a
                          key={index}
                          href={socialLinks[socialName]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 48,
                              height: 48,
                              lg: { width: 64, height: 64 },
                              bgcolor: "black",
                              color: "white",
                              borderRadius: 2,
                              border: "2px solid white",
                              padding: "8px",
                            }}
                          >
                            <Icon fontSize="large" />
                          </Box>
                        </a>
                      );
                    })}
                  </Box>
      </Box>

      {/* Right Section */}
      <Box width={{ xs: '100%', lg: '50%' }} p={6} lg={{ p: 12, pl: 44 }} mt={{ xs: 10, lg: 0 }}>
        <Box position="relative">
          {[{ name: 'Awards', count: 2, icon: EmojiEvents, color: '#706CE0' }, { name: 'Clients', count: '25+', icon: EmojiEvents, color: '#F96077' }, { name: 'Events', count: '50+', icon: CalendarToday, color: '#F9B500' }]
            .map((card, index) => (
              <Card key={index} sx={{ width: '100%', maxWidth: 350, height: 230, mt: index === 0 ? 0 : { xs: -4, lg: -7 }, boxShadow: 3, ml: index % 2 === 0 ? 'auto' : '0' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontSize={25} fontWeight="bold" sx={{ fontFamily: 'Poppins, sans-serif' }}>{card.name}</Typography>
                    <card.icon style={{ color: card.color }} />
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
                    <Typography variant="h2" fontWeight="medium" textAlign="center" sx={{ fontFamily: 'Poppins, sans-serif' }}>{card.count}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
