import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryLink.css';

function CategoryLink({ category, closeMenus }) {
  const [background] = useState(require(`../assets/${category}.png`));
  const [categoryFormatted] = useState(
    category.toLowerCase().replace(/-/g, '')
  );

  // const background = require(`../assets/${category}.png`);
  // const categoryFormatted = category.toLowerCase().replace(/-/g, '');

  return (
    <Link
      to={`/products/${categoryFormatted}`}
      // onClick={() => closeMenus()}
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
