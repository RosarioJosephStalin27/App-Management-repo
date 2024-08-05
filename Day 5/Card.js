import React from 'react';
import './Card.css';

function Card({ heading, description, actionText }) {
  return (
    <div className="card">
      <p className="heading">{heading}</p>
      <p>{description}</p>
      {/* <p>{actionText}</p> */}
    </div>
  );
}

export default Card;
