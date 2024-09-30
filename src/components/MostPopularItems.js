import React from 'react';

const products = [
  { name: 'Reptile Heat Lamp', brand: 'ReptiLux', price: '$29.99', image: 'heat_lamp.jpg' },
  { name: 'Gecko Habitat Deluxe', brand: 'GeckoWorld', price: '$75.50', image: 'gecko_habitat.jpg' },
  { name: 'Lizard Food Pack', brand: 'LizardFeast', price: '$15.25', image: 'lizard_food.jpg' },
  { name: 'Snake Bedding Premium', brand: 'SlytherNest', price: '$22.99', image: 'snake_bedding.jpg' },
  { name: 'Turtle Water Filter', brand: 'TurtleClean', price: '$18.99', image: 'turtle_filter.jpg' },
  { name: 'Bearded Dragon Light', brand: 'DragonBright', price: '$35.00', image: 'dragon_light.jpg' },
  { name: 'Reptile Climbing Decor', brand: 'ClimbMaster', price: '$27.99', image: 'climbing_decor.jpg' },
  { name: 'Snake Terrarium Kit', brand: 'SerpentHome', price: '$85.00', image: 'snake_terrarium.jpg' },
];

const MostPopularItems = () => {
  return (
    <div className="most-popular-section">
      <h2>Most Popular Items</h2>
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

export default MostPopularItems;
