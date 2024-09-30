import React from 'react';


const RewardsSection = () => {
  return (
    <div className="rewards-section">
      <h2>Join our rewards program</h2>
      <div className="rewards-content">
        {/* Reptile Images */}
        <div className="reptile-images">
          <img src="snake.jpg" alt="Snake" className="reptile-image" />
          <img src="gecko.jpg" alt="Gecko" className="reptile-image" />
          <img src="turtle.jpg" alt="Turtle" className="reptile-image" />
        </div>

        {/* Bullet Points */}
        <ul className="rewards-benefits">
          <li>Premium Benefits</li>
          <li>Community</li>
          <li>Best Deals</li>
        </ul>
      </div>

      {/* Subscribe Button */}
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default RewardsSection;
