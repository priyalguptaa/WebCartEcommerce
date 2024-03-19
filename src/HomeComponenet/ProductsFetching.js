import React, { useState, useEffect } from 'react';
import { RiShoppingCartFill, RiHeartFill } from 'react-icons/ri';
import productsData from '../HomeComponenet/Products.json'; 
import '../CSS/ProductFetching.css';
import StarRating from './StarRating';

const ProductFetching = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    console.log('Product added to wishlist:', product);
  };

  const handleViewDescription = (productId) => {
    console.log('View description for product:', productId);
    
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-info">
            <div className="product-hover">
            <RiShoppingCartFill className="icon" onClick={() => handleAddToCart(product)} fill="#FFA500" />
            <RiHeartFill className="icon" onClick={() => handleAddToWishlist(product)} fill="#FFA500" />

            </div>
            <img src={product.image} alt={product.name} className="product-image" onClick={() => handleViewDescription(product.id)} />
            <h2 className="product-name">{product.name}</h2>
            <StarRating/>
            <div className="product-price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFetching;
