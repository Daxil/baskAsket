import React from 'react';

const Stars = ({ rating, onChange }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? 'filled' : ''}`}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
