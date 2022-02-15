import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListCard.css';

function ProductListCard({ item, variant, closeMenus }) {
  // console.log(item);

  return (
    <Link to={`/`} className='productListCard'>
      {/* onClick={() => closeMenus()} */}
      <div
        className='imageContainer'
        style={{ backgroundImage: `url(${variant.image})` }}
      ></div>
      <div className='productInfo'>
          <p className='productName'>
            {item.name} – {variant.name}{' '}
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
