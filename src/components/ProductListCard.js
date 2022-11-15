import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import '../styles/ProductListCard.css';

import productImages from '../assets/products/productImports';

function ProductListCard({ item, variant }) {
  const [closeMenus] = useOutletContext();
  const image = require(`../assets/products/normal_hoodie_blue.jpeg`);

  return (
    <Link
      to={`/product/${item.id}/${variant.name.toLowerCase()}`}
      className='productListCard'
      onClick={closeMenus}
    >
      <div
        className='imageContainer'
        style={{ backgroundImage: `url(${productImages[`${variant.image}`]})` }}
      ></div>

      <div className='productInfo'>
        <p className='productName'>
          {item.name} - {variant.name}
        </p>
        <p className='price'>
          <span>{Number(item.price).toLocaleString('no')}</span> NOK
        </p>
      </div>
      {variant.stock === 0 && <div className='outOfStock'></div>}
      {variant.stock === 0 && (
        <div className='outOfStock-banner'>
          <div>OUT OF STOCK</div>
        </div>
      )}
    </Link>
  );
}

export default ProductListCard;
