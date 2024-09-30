import React, { useState, useEffect } from 'react';


const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const deals = [
    { 
      image: './petstore/assets/Photos/promo1.jpg', 
      text: '$10 OFF $50 Plus Free Delivery with Same Day Delivery', 
      cta: 'SHOP NOW', 
      details: 'See Details'
    },
    { 
      image: 'promo2.jpg', 
      text: '20% OFF on Reptile Habitats - Limited Time Only!', 
      cta: 'Shop Habitats', 
      details: 'See Details'
    },
    { 
      image: 'promo3.jpg', 
      text: 'Buy One Get One Free on all Bearded Dragon Accessories!', 
      cta: 'Shop Accessories', 
      details: 'See Details'
    },
    { 
      image: 'promo4.jpg', 
      text: 'Get $25 Off Your First Purchase Over $75!', 
      cta: 'Shop Now', 
      details: 'See Details'
    },
    { 
      image: 'promo5.jpg', 
      text: 'Free Snake Starter Kit with Every Adoption!', 
      cta: 'Adopt Now', 
      details: 'See Details'
    },
    { 
      image: 'promo6.jpg', 
      text: '50% OFF All Turtle Food Supplies for Members!', 
      cta: 'Join Now', 
      details: 'See Details'
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const pauseCarousel = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="hero-carousel-container">
      <div className="carousel-slide" key={currentIndex}>
        <div className="carousel-content">
          <div className="carousel-text">
            <h1>{deals[currentIndex].text}</h1>
            <button className="cta-button">{deals[currentIndex].cta}</button>
            <a href="#" className="details-link">{deals[currentIndex].details}</a>
          </div>
          <img src={deals[currentIndex].image} alt="Promo" className="carousel-image" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {deals.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Pause button */}
      <button className="pause-button" onClick={pauseCarousel}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default HeroCarousel;
