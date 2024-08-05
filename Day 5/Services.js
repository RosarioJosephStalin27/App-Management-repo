import React from 'react';
import '../Styles/services.css';

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Workouts</h1>
      <div className="services-cards">
        <div className="service-card">
          <h2>Personal Training</h2>
          <p>Get one-on-one training with our expert trainers to achieve your fitness goals.</p>
        </div>
        <div className="service-card">
          <h2>Strength Training</h2>
          <p>Your main focus must be on cardio,speed and agility.</p>
        </div>
        <div className="service-card">
          <h2>Muscle mass</h2>
          <p>Heavy weight training with added protein diet.</p>
        </div>
        <div className="service-card">
          <h2>Virtual Coaching</h2>
          <p>Access virtual coaching sessions to stay fit from the comfort of your home.</p>
        </div>
        <div className="service-card">
          <h2>Fatloss Mission </h2>
          <p>Cardio and stamina are the main focuses strengthen the abdomen parts.</p>
        </div>
        <div className="service-card">
          <h2>Calisthenics </h2>
          <p>A complete different level of training with weight and gymnastics.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
