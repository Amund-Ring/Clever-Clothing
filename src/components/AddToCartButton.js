import React from 'react';
import '../styles/AddToCartButton.css';
import shoppingCartApi from '../api/shoppingCart';
import { Link } from 'react-router-dom';

function AddToCartButton({ productItem, productVariant }) {
  const handlePress = () => {
    const newCartItem = {
      id: Date.now(),
      item: productItem,
      variant: productVariant
    };

    shoppingCartApi.addToCart(newCartItem);
  };

  return (
    <Link to='/' className='addToCartButton'>
      <div onClick={handlePress}>
        Add to cart
      </div>
    </Link>
  );
}

export default AddToCartButton;
