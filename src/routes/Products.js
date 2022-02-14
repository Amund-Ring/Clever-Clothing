import React from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  const { name } = useParams();

  return <div>Category: {name}</div>;
}

export default Products;
