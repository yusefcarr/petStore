import React from 'react';


const products = [
  { name: 'Terrarium Deluxe', brand: 'ReptileWorld', price: '$45.99', image: 'terrarium.jpg' },
  { name: 'Bearded Dragon Food Pack', brand: 'DragonBites', price: '$12.99', image: 'dragonfood.jpg' },
  { name: 'Premium Snake Bedding', brand: 'SlytherCo', price: '$22.50', image: 'snakebedding.jpg' },
  { name: 'Gecko Habitat Kit', brand: 'GeckoHaven', price: '$65.00', image: 'geckohabitat.jpg' },
  { name: 'Turtle UVB Lamp', brand: 'TurtleLux', price: '$18.75', image: 'turtlelamp.jpg' },
  { name: 'Lizard Water Dish', brand: 'LizardHydro', price: '$9.49', image: 'lizarddish.jpg' },
  { name: 'Reptile Climbing Branch', brand: 'ClimbPro', price: '$25.99', image: 'reptilebranch.jpg' },
];

const TopSellers = () => {
  return (
    <div className="top-sellers-section">
      <h2>Top Sellers</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.brand}</h3>
            <p>{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
