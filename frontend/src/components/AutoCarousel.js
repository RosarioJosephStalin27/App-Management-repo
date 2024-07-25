import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported
import workout1 from './assets/workout1.jpeg';
import workout2 from './assets/workout2.jpeg';
import workout3 from './assets/workout3.jpeg';
const images = [workout1, workout2, workout3];

const AutoCarousel = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Carousel interval={3000} style={{ width: '100%', maxWidth: '1200px', margin: 'auto' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h3>Fitness Tip #{index + 1}</h3>
              <p>Stay fit with our top exercises!</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoCarousel;
