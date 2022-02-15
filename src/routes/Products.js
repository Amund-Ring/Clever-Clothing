import React, { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import categoriesAPI from '../api/categories';
import productsAPI from '../api/products';
import ProductListCard from '../components/ProductListCard';
import '../styles/Products.css';

function Products({}) {
  const { category } = useParams();
  const [productItems, setProductItems] = useState([]);
  const [closeMenus] = useOutletContext();

  const getProductItems = async () => {
    const categoryId = await categoriesAPI.getCategoryId(category);
    const itemsOfCategory = await productsAPI.getItemsOfCategory(categoryId);
    setProductItems(itemsOfCategory);
  };

  useEffect(() => {
    getProductItems();
  }, [category]);

  return (
    <main className='products'>
      <Link to='/' className='backArrowContainer' onClick={closeMenus}>
        <BiArrowBack className='backArrow' />
      </Link>

      {productItems.map(item =>
        item.variants.map(variant => (
          <ProductListCard
            item={item}
            variant={variant}
            key={`${item.id}.${variant.id}`}
          />
        ))
      )}
    </main>
  );
}

export default Products;
