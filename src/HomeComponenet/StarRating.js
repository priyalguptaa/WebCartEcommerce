import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../CSS/StarRating.css'
const StarRating = ({ rating }) => {
  const stars = [];
  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating - filledStarsCount >= 0.5;

  // Fill stars
  for (let i = 0; i < filledStarsCount; i++) {
    stars.push(<FaStar key={i} className="star-filled" />);
  }

  // Add half star if necessary
  if (hasHalfStar) {
    stars.push(<FaStar key="half" className="star-half" />);
  }

  // Fill remaining empty stars
  const remainingStarsCount = 5 - stars.length;
  for (let i = 0; i < remainingStarsCount; i++) {
    stars.push(<FaStar key={i} className="star-empty" />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
