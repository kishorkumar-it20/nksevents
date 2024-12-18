import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const eventImages = [
  { id: 1, src: 'image/event1.JPG', title: 'Error Makes Clever', detailsPage: '/event/1' },
  { id: 2, src: 'image/event2.JPG', title: 'Hello Techies', detailsPage: '/event/2' },
  { id: 3, src: 'image/event3.JPG', title: 'Chennai Freelancer Club', detailsPage: '/event/3' },
  { id: 4, src: 'image/event1.JPG', title: 'Event 4', detailsPage: '/event/4' },
];

const EventCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Slider {...settings}>
        {eventImages.map((event) => (
          <div
            key={event.id}
            onClick={() => navigate(event.detailsPage)}
            style={{
              cursor: 'pointer',
              padding: '0 10px', // Adds horizontal space between slides
            }}
          >
            <img
              src={event.src}
              alt={event.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {event.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCarousel;
