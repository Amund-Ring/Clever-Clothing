import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryLink.css';

function CategoryLink({ category }) {
  const background = require(`../assets/${category}.png`);
  const categoryFormatted = category.toLowerCase().replace(/-/g, '');

  return (
    <Link
      to={`/products/${categoryFormatted}`}
      className='categoryLink'
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <h2>{category}</h2>
    </Link>
  );
}

export default CategoryLink;
