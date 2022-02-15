import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import categoriesAPI from '../api/categories';
import '../styles/Products.css';

function Products() {
  const { name } = useParams();
  const [categoryId, setCategoryId] = useState('');
  const [productItems, setProductItems] = useState([
    {
      id: 1,
      name: 'Cargo Trouser',
      description:
        'The Cargo Trouser is a relaxed-fit cargo trouser, made with corduroy fabric. It features patch pockets on the side, an elastic waistband, and welt pockets in the back.',
      price: 1200,
      categoryId: [4],
      variants: [
        {
          id: 1,
          name: 'Black',
          image:
            'https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_black.jpeg',
          stock: 3
        },
        {
          id: 2,
          name: 'Sand',
          image:
            'https://frend-ecom-api.azurewebsites.net/imgs/cargo_trouser_sand.jpeg',
          stock: 2
        }
      ]
    }
  ]);

  const getCategoryId = async () => {
    const categoryId = await categoriesAPI.getCategoryId(name);
    setCategoryId(categoryId);
  };

  useEffect(() => {
    getCategoryId();
  }, []);

  return (
    <main className='products'>
      <div className="productListCard"></div>
    </main>
  );
}

export default Products;
