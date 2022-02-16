import React from 'react';
import '../styles/AddToCartButton.css';
import shoppingCartApi from '../api/shoppingCart';
import { Link } from 'react-router-dom';

function AddToCartButton({ productItem, productVariant, disabled }) {
  const handlePress = () => {
    const newCartItem = {
      id: Date.now(),
      item: productItem,
      variant: productVariant
    };

    shoppingCartApi.addToCart(newCartItem);
  };

  if (disabled) return <div className='addToCartButton-disabled'>Out of stock</div>;

  return (
    <div className='addToCartButton' onClick={handlePress}>
      Add to cart
    </div>
  );
}

export default AddToCartButton;
