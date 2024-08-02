import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AutoCarousel.css'
// Correct paths to your images
// import workoutImage1 from '../assets/workout1.jpeg';
// import workoutImage2 from '../assets/workout2.jpeg';
// import workoutImage3 from '../assets/work1.jpeg';
// import workoutImage4 from '../assets/work2.jpeg';
import workoutImage5 from '../assets/wk1.jpeg';
import workoutImage6 from '../assets/wk2.jpeg';
// import workoutImage7 from '../assets/wk3.jpeg';



const images = [workoutImage5,workoutImage6];

const AutoCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption className='carousel-caption'>
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
