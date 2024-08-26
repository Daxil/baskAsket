import React, { useState, useEffect } from 'react';
import './boll.css'
import ball from './img/ball.png'
const LoadingScreen = () => {
  // Declare the states at the top level of the component
  const [rotationAngle, setRotationAngle] = useState(0);
  const [shadowLength, setShadowLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prevAngle) => (prevAngle + 2) % 360);
      setShadowLength((prevLength) => {
        if (prevLength >= 20) {
          return 0;
        } else {
          return prevLength + 2;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div
        className="basketball"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        <img src={ball} alt="Basketball" />
      </div>
    
    </div>
  );
};

export default LoadingScreen;
