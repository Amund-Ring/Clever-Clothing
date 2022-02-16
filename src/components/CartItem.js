import React from 'react';
import '../styles/CartItem.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function CartItem({ cartItem, closeMenus }) {

  return (
    <div className='cartItem'>
      <Link
        to={`/product/${
          cartItem.item.id
        }/${cartItem.variant.name.toLowerCase()}`}
        className='cartItemImgLink'
        onClick={closeMenus}
      >
        <div
          className='cartItemImg'
          style={{
            backgroundImage: `url(${cartItem.variant.image})`
          }}
        ></div>
      </Link>
      <div className='cartItemDetails'>
        <Link
          to={`/product/${
            cartItem.item.id
          }/${cartItem.variant.name.toLowerCase()}`}
          className='link'
          onClick={closeMenus}
        >
          <p className='cartItemDetailsText'>{`${cartItem.item.name} - ${cartItem.variant.name}`}</p>
        </Link>
        <p className='cartItemDetailsPrice'>{cartItem.item.price} NOK</p>
      </div>
      <div className='cartItemDelete'>
        <AiOutlineDelete className='bin' />
      </div>
    </div>
  );
}

export default CartItem;
