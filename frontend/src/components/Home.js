import React from 'react';
import '../Styles/Home.css'
import AutoCarousel from './AutoCarousel';

function Home() {
  return (
    <div>
      <div className='home'>
      <AutoCarousel />
        <center><h1 className='wel'>WELCOME TO FITLIFE</h1></center>
        <center><h4 className='hel'>A WORKOUT A DAY KEEPS THE DOCTOR AWAY</h4></center>
      </div>
    
    </div>
  )
}

export default Home;
