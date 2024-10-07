import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext
const AnimalComponent = () => {
  const { animal } = useParams();  // Gets the animal type from the URL (e.g., gecko)
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);  // State to store related products
  useEffect(() => {
    // Fetch pets and products concurrently using Promise.all
    Promise.all([
      fetch(`http://localhost:5000/pets/${animal}`).then((response) => response.json()),
      fetch(`http://localhost:5000/products/${animal}`).then((response) => response.json())
    ])
    .then(([petsData, productsData]) => {
      setPets(petsData);  // Set pets data
      setProducts(Array.isArray(productsData) ? productsData : []);  // Ensure productsData is an array
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, [animal]);  // Re-fetch when the animal type changes
  return (
    <div>
      <h2>{animal.charAt(0).toUpperCase() + animal.slice(1)}s</h2>  {/* Capitalize animal name */}
      {/* Display Pets */}
      <ul>
        {pets.map((pet) => (
          <div key={pet._id}>
            <h1>{pet.name}</h1>
            <p>{pet.description}</p>
            <img src={pet.image} alt={pet.name} />
          </div>
        ))}
      </ul>
      {/* Display Related Products */}
      <h3>Related Products</h3>
      <ul>
        {products.map((product) => (
          <div key={product._id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} />
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default AnimalComponent;