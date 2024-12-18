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
import { Facebook, Instagram, LinkedIn, WhatsApp} from '@mui/icons-material';
const events = [
  {
    eventName: "One Yes StartUp Meetup",
    location: {
      venue: "One Yes",
      city: "Chennai",
    },
    date: "Apr 5, 2024",
    content: `
      We are thrilled to have successfully hosted a dynamic Startup Meet this year, bringing together visionary 
      entrepreneurs, investors, and industry leaders. The event was designed to foster collaboration and innovation, 
      featuring insightful panel discussions, keynote speeches, and interactive workshops. Our team meticulously 
      curated the stage and venue setup to create an inspiring environment that encouraged networking and idea-sharing. 
      The Startup Meet provided a platform for startups to showcase their ideas and connect with potential partners 
      and investors. We are proud to have played a role in empowering the startup community and look forward to hosting 
      more impactful events in the future.
    `,
    videoSrc: "Corporate Events/One Yes Video 2.mp4",
  },
  {
    eventName: "Carrer LanchPad",
    location: {
      venue: "CoWorks",
      city: "Chennai",
    },
    date: "Aug 10, 2024",
    content: `
      We are thrilled to have successfully hosted a dynamic Startup Meet last year, bringing together visionary 
      entrepreneurs, investors, and industry leaders. The event was designed to foster collaboration and innovation, 
      featuring insightful panel discussions, keynote speeches, and interactive workshops. Our team meticulously 
      curated the stage and venue setup to create an inspiring environment that encouraged networking and idea-sharing. 
      The Startup Meet provided a platform for startups to showcase their ideas and connect with potential partners 
      and investors. We are proud to have played a role in empowering the startup community and look forward to hosting 
      more impactful events in the future.
    `,
    videoSrc: "Corporate Events/One Yes Video 2.mp4",
  },

  {
    eventName: "Radisson Blu",
    location: {
      venue: "Radisson Blu",
      city: "Chennai",
    },
    date: "May 27, 2024",
    content: `
      We recently had the pleasure of organizing a successful event at the prestigious Radisson Blu. 
      Known for its elegant ambiance and top-notch services, the venue provided the perfect setting for a seamless and unforgettable experience.
       From the luxurious surroundings to the exceptional service, every detail was carefully curated to ensure that our guests had an extraordinary time.
        The event featured engaging activities, delightful catering, and an overall atmosphere of sophistication.
       We are proud to have been a part of this incredible occasion and look forward to creating many more memorable moments!
    `,
    videoSrc: "Corporate Events/RADISSON BLU ROOM.mp4",
  },
  // {
  //   eventName: "Error Makes Clever",
  //   location: {

  //     city: "Chennai",
  //   },
  //   date: "Aug 10, 2024",
  //   content: `
  //     At Error Makes Clever, we offer clear and accessible lessons on corporate technologies, all in Tamil for your convenience. 
  //     With over 2,000 students trained and 1 million+ digital followers, we are dedicated to enhancing both personal and professional growth.
  //      Our mission is to empower students to excel in their careers and personal lives. 
  //      Join our vibrant community and follow us to stay updated and improve your skills with expert guidance. 
  //     Be part of our journey to success and growth!
  //   `,
  //   videoSrc: "video/Error Makes Clever Event Promo .mp4",
  // },
  
];
const socialLinks = {
  Facebook: 'https://www.facebook.com/nkseventmgt',
  Instagram: 'https://www.instagram.com/nks_events_/',
  Twitter: 'https://www.linkedin.com/company/nks-events/',
  WhatsApp: 'https://wa.me/8825767852', // Use international phone format without spaces or special characters
};

const CorporateEvents = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; // Number of slides

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
    <Box sx={{ mt: 7, textAlign: "center" }}>
      <Typography variant="h3"  fontWeight="400" sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Corporate Events
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
                height: "100%", // Ensures the video section height matches the content section height
              }}
            >
              <video
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "100%", // Matches the content height
                  borderRadius: "5px",
                  objectFit: "cover", // Maintains aspect ratio
                }}
                controls
              >
                <source src={event.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                  <Typography variant="h6" sx={{ color: "grey", fontFamily: 'Poppins, sans-serif' }}>
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

export default CorporateEvents;
