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
    eventName: "Error Makes Clever",
    location: {
      venue: "MakersTribe",
      city: "Chennai",
    },
    date: "Jul 20, 2024",
    content: `
      We are excited to partner with Mirth Gifts to bring personalized gift customization services to Error Makes Clever Tech Institute students.
       At our startup, we specialize in creating unique, customized gifts tailored to each student's preferences, making every occasion memorable.
        Our seamless process ensures that the perfect gift is designed and delivered directly to the student’s home.
         Whether it's for special events, achievements, or just to show appreciation, we are dedicated to crafting thoughtful and personalized gifts.
       Our collaboration with Mirth Gifts guarantees quality and creativity, ensuring that every gift stands out.
    `,
    imageSrc: "image/error.jpg",
  },
 
];
const socialLinks = {
  Facebook: 'https://www.facebook.com/nkseventmgt',
  Instagram: 'https://www.instagram.com/nks_events_/',
  Twitter: 'https://www.linkedin.com/company/nks-events/',
  WhatsApp: 'https://wa.me/8825767852', // Use international phone format without spaces or special characters
};

const Customization = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 1; // Number of slides

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
         Gift Customization
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
                  <Typography variant="h6" sx={{ color: "black", mb: 0, fontFamily: 'Poppins, sans-serif' }}>
                    {event.location.venue}
                  </Typography>
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

export default Customization;
