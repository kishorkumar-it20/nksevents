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
    eventName: "Chennai Freelancers Club",
    location: {
      venue: "IITM",
      city: "Chennai",
    },
    date: "May 25, 2024",
    content: `
     Chennai Freelancer Club (CFC) is a dynamic community that bridges the gap between creative freelancers and potential clients.
      The platform provides freelancers with an extensive range of resources and tools, such as job postings, guidance, skill development, 
      industry connections, networking events, and access to a supportive community of professionals. 
      At CFC, we are committed to empowering freelancers to thrive in their careers and secure exciting new projects. 
      Which is why we cater to people across a wide-range of opportunities, from high-end industrial projects for experienced professionals to pilot-scale projects for freshers who are just starting their career.
    `,
    imageSrc: "Our Event Photos/cfcall.jpg",
  },
  {
    eventName: "Hello Techies",
    location: {
      venue: "Shaish Info Solutions",
      city: "Chennai",
    },
    date: "Jul 23, 2024",
    content: `
     I am thrilled to share that we successfully hosted our very first offline event, Hello Techies, on March 31st, 2024 It was an amazing opportunity to bring participants to explore Knowledge sharing sessions and Panel Discussions. The energy in the room was electric, and the connections made were invaluable.
      Key Highlights: Engaging Speakers: We had the privilege of hearing from Navin Kumar (Hr_Navin), who shared their insights on Job Search Strategies.
      Networking Opportunities: Attendees connected, collaborated, and exchanged ideas, fostering a sense of community that I truly believe will lead to future collaborations.
      A heartfelt thank you to everyone who attended, our incredible speaker Hari from Guru Tech, and our sponsors Shiash Info Solutions Private Limited for their support. Your enthusiasm and participation made this event a resounding success!
    `,
    imageSrc: "Our Event Photos/Group Pic .png",
  },
];
const socialLinks = {
  Facebook: 'https://www.facebook.com/nkseventmgt',
  Instagram: 'https://www.instagram.com/nks_events_/',
  Twitter: 'https://www.linkedin.com/company/nks-events/',
  WhatsApp: 'https://wa.me/8825767852', // Use international phone format without spaces or special characters
};

const NetworkEvents = () => {
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
        Network Events
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

export default NetworkEvents;
