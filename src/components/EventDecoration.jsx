import React, { useState } from "react";
import {
  Box,
  Typography,
  SvgIcon,
  IconButton,
  Avatar
} from "@mui/material";
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fontsource/poppins'; 
import { Facebook, Instagram, WhatsApp, LinkedIn} from '@mui/icons-material';
const events = [
  {
    eventName: "Event Production",
    location: {
      city: "Chennai",
    },
    date: "Jan 10, 2024",
    content: `
      Welcome to NKS, where we bring your event visions to life with expert stage decoration services. 
      With years of experience in weddings, corporate events, and parties, we specialize in creating stunning, customized stage designs that leave a lasting impression. 
      Our team works closely with clients to ensure every detail is perfect, from elegant floral arrangements to vibrant lighting. 
      At NKS, we’re passionate about turning your special moments into unforgettable memories with creativity, precision, and the finest materials. 
      Let us transform your venue into something truly breathtaking.
    `,
    imageSrc: "Decoration/Stage Decorations.jpg",
  },
  {
    eventName: "Event Production",
    location: {
      city: "Chennai",
    },
    date: "Apr 25, 2024",
    content: `
      Welcome to NKS, where we bring your event visions to life with expert stage decoration services. 
      With years of experience in weddings, corporate events, and parties, we specialize in creating stunning, customized stage designs that leave a lasting impression. 
      Our team works closely with clients to ensure every detail is perfect, from elegant floral arrangements to vibrant lighting. 
      At NKS, we’re passionate about turning your special moments into unforgettable memories with creativity, precision, and the finest materials. 
      Let us transform your venue into something truly breathtaking.
    `,
    imageSrc: "Decoration/IMG-20200123-WA0007.jpg",
  },
];
const socialLinks = {
  Facebook: 'https://www.facebook.com/nkseventmgt',
  Instagram: 'https://www.instagram.com/nks_events_/',
  Twitter: 'https://www.linkedin.com/company/nks-events/',
  WhatsApp: 'https://wa.me/8825767852', // Use international phone format without spaces or special characters
};

const EventDecoration = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 2; // Number of slides

  const moveSlide = (direction) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = totalSlides - 1;
      } else if (newIndex >= totalSlides) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h3"  fontWeight="400" sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Events Production
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: 1400,
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box
            className="slides"
            sx={{
              display: "flex",
              transform: `translateX(-${slideIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {/* Slide 1 */}
            {events.map((event, index) => (
        <Box key={index} sx={{ minWidth: "100%", boxSizing: "border-box", p: 3, backgroundColor: "#efefef" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              justifyContent: "space-between",
              height: "100%", // Ensures the entire section occupies full height
            }}
          >
            {/* Video Section */}
            <Box
                sx={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: { xs: 3, md: 0 },
                  pr: { md: 3 },
                  height: "100%", // Ensures the image section height matches the content section height
                }}
              >
                <img
                  src={event.imageSrc} // Update this with the image source
                  alt="Event Image"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "100%", // Matches the content height
                    borderRadius: "5px",
                    objectFit: "cover", // Maintains aspect ratio and covers the available area
                  }}
                />
              </Box>

            {/* Content Section */}
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%", // Matches video height
              }}
            >
              <Typography variant="h4" fontWeight="900" mb={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {event.eventName}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <SvgIcon sx={{ fontSize: 40, color: "black" }}>
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SvgIcon>
                <Typography variant="h5" sx={{ ml: 2, mt: 1, fontFamily: 'Poppins, sans-serif' }}>
                  {event.date}
                </Typography>
              </Box>
              
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ fontSize: "40px", color: "black", marginRight: "16px" }}
                />
                <Box>
                  <Typography variant="h6" sx={{ color: "black", fontFamily: 'Poppins, sans-serif' }}>
                    {event.location.city}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ mt: 1, textAlign: 'justify', px: 2, fontFamily: 'Poppins, sans-serif' }}>
                {event.content}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "",
                  mt: 3,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  {/* Logo on the left */}
                  <img src="image/nksLogo.png" alt="NKS Logo" width="120" height="50" />

                  {/* Icons on the right */}
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
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
            {/* Slide 2 */}
            {/* Similarly convert the second and third slides here */}
          </Box>

          <IconButton
            className="arrow left"
            sx={{ position: "absolute", top: "50%", left: "10px", zIndex: 1000 }}
            onClick={() => moveSlide(-1)}
          >
            <ArrowBackIosIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <IconButton
            className="arrow right"
            sx={{ position: "absolute", top: "50%", right: "10px", zIndex: 1000 }}
            onClick={() => moveSlide(1)}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
};

export default EventDecoration;
