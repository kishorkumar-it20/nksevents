import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import '@fontsource/poppins'; 
const TeamSection = () => {
  const members = [
    { id: 1, bgColor: '#FEE2E2', image: 'image/founder.png', name:'Shanmuga Raj', position:'Founder' },
    { id: 2, bgColor: '#E0E7FF', image: 'image/anchor.png', name:'Shreeranjana', position:'EMCE'  },
    { id: 3, bgColor: '#FED7E2', image: 'image/contentwriter.png', name:'Aravind', position:'Content Creator'  },
    { id: 4, bgColor: '#FEF3C7', image: 'image/videographer.png', name:'Ganesh', position:'Videographer'  },
  ];

  const MemberCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4), // Increased padding
    textAlign: 'center',
    borderRadius: '16px',
    width: '250px',  // Increased width
    height: '250px', // Increased height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }));

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Our Team
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Passionate professionals dedicated to making your event extraordinary.
      </Typography>
      <Grid container spacing={10} justifyContent="center" marginTop={2}>
        {members.map((member) => (
          <Grid item key={member.id}>
            <MemberCard style={{ backgroundColor: member.bgColor }}>
              <Avatar
                src={member.image}
                alt={`Member ${member.id}`}
                sx={{ width: 200, height: 200, marginBottom: 2 }} // Increased size
              />
              <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
                {member.position}
              </Typography>
            </MemberCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TeamSection;
