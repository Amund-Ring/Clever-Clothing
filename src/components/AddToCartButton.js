import React from 'react';
import '../styles/AddToCartButton.css';
import shoppingCartApi from '../api/shoppingCart';
import { Link, useOutletContext } from 'react-router-dom';

function AddToCartButton({ productItem, productVariant, disabled }) {
  const [closeMenus] = useOutletContext();
  
  const handlePress = () => {
    const newCartItem = {
      id: Date.now(),
      item: productItem,
      variant: productVariant
    };

    shoppingCartApi.addToCart(newCartItem);
    closeMenus();
  };

  if (disabled) return <div className='addToCartButton-disabled'>Out of stock</div>;

  return (
    <div className='addToCartButton' onClick={handlePress}>
      Add to cart
    </div>
  );
}

export default AddToCartButton;
