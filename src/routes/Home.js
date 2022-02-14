import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CategoryLink from '../components/CategoryLink';
import '../styles/Home.css';

function Home() {
  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    let result;
    await axios
      .get('https://frend-ecom-api.azurewebsites.net/Category')
      .then(res => (result = res.data));

    let frontPageCategories = result
      .filter(category => category['id'] !== 3)
      .slice(0, 4);

    let frontPageCategoriesOrdered = [
      frontPageCategories[0],
      frontPageCategories[3],
      frontPageCategories[1],
      frontPageCategories[2]
    ];

    setCategories(frontPageCategoriesOrdered);
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
