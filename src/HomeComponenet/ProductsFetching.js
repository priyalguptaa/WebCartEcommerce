import React, { useState, useEffect } from 'react';
import productsData from '../HomeComponenet/Products.json'; 
import '../CSS/ProductFetching.css';

const ProductFetching = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Commented out API fetching code
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get('API_URL');
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   }
    // };
    // fetchProducts();

    // Set products using mock data
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
  };

  const handleViewDescription = (productId) => {
    console.log('View description for product:', productId);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-info">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleViewDescription(product.id)}>Description</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFetching;
