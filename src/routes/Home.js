import React, { useEffect, useState } from 'react';

import CategoryLink from '../components/CategoryLink';
import categoriesAPI from '../api/categories';
import '../styles/Home.css';

function Home() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const frontPageCategories = await categoriesAPI.getFrontPageCategories();
    setCategories(frontPageCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className='home'>
      {categories.map(category => (
        <CategoryLink category={category.name} key={category.id} />
      ))}
    </main>
  );
}

export default Home;
