import React from 'react';
import AutoCarousel from './AutoCarousel';
import '../Styles/Home.css';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <AutoCarousel />
      <div className='home'>
        <center><h1 className='wel'>WELCOME TO FISTPUMP</h1></center>
        
        {/* Existing content */}
        <div className="card-container">
          <div className="card">
            <p className="heading">Workout of the Day</p>
            <p>Power up with our daily workout routines!</p>
            <p>Get Started</p>
          </div>
          <div className="card">
            <p className="heading">Nutritional Tips</p>
            <p>Discover healthy eating habits and recipes.</p>
            <p>Learn More</p>
          </div>
          <div className="card">
            <p className="heading">Personal Training</p>
            <p>Customized plans just for you.</p>
            <p>Join Now</p>
          </div>

          {/* New content added */}
          <div className="card">
            <p className="heading">Fitness Challenges</p>
            <p>Join our weekly fitness challenges and stay motivated!</p>
            <p>Participate</p>
          </div>
          <div className="card">
            <p className="heading">Success Stories</p>
            <p>Read inspiring stories from our successful members.</p>
            <p>Read More</p>
          </div>
          <div className="card">
            <p className="heading">Fitness Blog</p>
            <p>Stay updated with the latest fitness trends and tips.</p>
            <p>Explore Blog</p>
          </div>
          <div className="card">
            <p className="heading">Gym Equipment</p>
            <p>Check out the latest and greatest in gym equipment.</p>
            <p>Shop Now</p>
          </div>
        </div>

        {/* Attractive Content Section */}
        <div className="attractive-content-container">
          <h2 className="attractive-heading">Discover More:</h2>
          <div className="attractive-content">
            <div className="attractive-card">
              <img src="/path-to-image/fitness-tips.png" alt="Fitness Tips" className="attractive-icon" />
              <h3>Expert Tips</h3>
              <p>Get valuable insights from fitness experts.</p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="attractive-card">
              <img src="/path-to-image/nutrition-guide.png" alt="Nutrition Guide" className="attractive-icon" />
              <h3>Nutrition Guide</h3>
              <p>Find out what to eat for optimal performance.</p>
              <button className="learn-more-button">View Guide</button>
            </div>
            <div className="attractive-card">
              <img src="/path-to-image/workout-plans.png" alt="Workout Plans" className="attractive-icon" />
              <h3>Workout Plans</h3>
              <p>Explore various workout plans tailored to your needs.</p>
              <button className="learn-more-button">See Plans</button>
            </div>
          </div>
        </div>

        {/* Learning section */}
        <div className="learning-container">
          <h2 className="learning-heading">You will learn about:</h2>
          <ul className="learning-list">
            <li>How fitness affects health</li>
            <li>The benefits of cardiovascular exercise</li>
            <li>Easy ways to improve your strength</li>
            <li>The importance of flexibility and balance training</li>
            <li>How to create and implement a fitness plan</li>
            <li>Ways to get better sleep</li>
          </ul>
          <div className="cta-button">
            <button className="register-button">Register Now for Free</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
