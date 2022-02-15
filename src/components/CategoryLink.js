import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import '../styles/CategoryLink.css';

function CategoryLink({ category }) {
  const [background] = useState(require(`../assets/${category}.png`));
  const [categoryFormatted] = useState(
    category.toLowerCase().replace(/-/g, '')
  );
  const [closeMenus] = useOutletContext();


  return (
    <Link
      to={`/products/${categoryFormatted}`}
      onClick={closeMenus}
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
