import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import categoriesAPI from '../api/categories';
import productsAPI from '../api/products';
import ProductListCard from '../components/ProductListCard';
import '../styles/Products.css';

function Products({ closeMenus }) {
  
  const { category } = useParams();
  const [categoryId, setCategoryId] = useState(null);
  const [productItems, setProductItems] = useState([]);

  const getCategoryId = async () => {
    const categoryId = await categoriesAPI.getCategoryId(category);
    setCategoryId(categoryId);
  };

  const getProductItems = async () => {
    setProductItems([]);
    const itemsOfCategory = await productsAPI.getItemsOfCategory(categoryId);
    setProductItems(itemsOfCategory);
  }

  useEffect(() => {
    getCategoryId();
  }, [category]);

  useEffect(() => {
    getProductItems();
  }, [categoryId])

  useEffect(() => {
    getProductItems();
  }, [])
  

  return (
    <main className='products'>

    <Link to='/' className='backArrowContainer' >
    {/* onClick={() => closeMenus()} */}
      <BiArrowBack className='backArrow' />
    </Link>

      {productItems.map(item =>
        (item.variants.map(variant =>
          <ProductListCard item={item} variant={variant} key={`${item.id}.${variant.id}`} />
        ))
      )}


    </main>
  );
}

export default Products;
