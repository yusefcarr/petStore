import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ShopPage = () => {
  return (
    <div className="shop-page">
      {/* Section 1: Image and Paragraph */}
      <section className="intro-section">
        <img src="reptiles_image.jpg" alt="All Reptiles" className="reptiles-image" />
        <p>
          Welcome to Scales and Tails! We provide a wide range of reptile products tailored to your pet’s specific needs. Whether you're shopping for snakes, bearded dragons, geckos, turtles, or more, we have everything you need—from habitats and food to toys and accessories. Shop with us today for the best reptile care products available online and in-store.
        </p>
      </section>

      {/* Section 2: Shop by Pet */}
      <section className="shop-by-pet">
        <h2>Shop by Pet</h2>
        <div className="pet-cards">
          <div className="pet-card">
            <Link to="/shop/snake">
              <img src="snake.jpg" alt="Snake" className="pet-image" />
            </Link>
            <p>Snake</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/turtle">
              <img src="turtle.jpg" alt="Turtle" className="pet-image" />
            </Link>
            <p>Turtle</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/gecko">
              <img src="gecko.jpg" alt="Gecko" className="pet-image" />
            </Link>
            <p>Gecko</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/chameleon">
              <img src="chameleon.jpg" alt="Chameleon" className="pet-image" />
            </Link>
            <p>Chameleon</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/crocodile">
              <img src="crocodile.jpg" alt="Crocodile" className="pet-image" />
            </Link>
            <p>Crocodile</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/bearded-dragon">
              <img src="bearded_dragon.jpg" alt="Bearded Dragon" className="pet-image" />
            </Link>
            <p>Bearded Dragon</p>
          </div>
          <div className="pet-card">
            <Link to="/shop/lizard">
              <img src="lizard.jpg" alt="Lizard" className="pet-image" />
            </Link>
            <p>Lizard</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;

