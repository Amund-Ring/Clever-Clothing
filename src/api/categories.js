import axios from 'axios';

const getCategories = async () => {
  let categories;

  await axios
    .get('https://frend-ecom-api.azurewebsites.net/Category')
    .then(res => (categories = res.data));

  return categories;
};

const getFrontPageCategories = async () => {
  const categories = await getCategories();

  const frontPageCategories = categories
    .filter(category => category['id'] !== 3)
    .slice(0, 4);

  const orderedCategories = [
    frontPageCategories[0],
    frontPageCategories[3],
    frontPageCategories[1],
    frontPageCategories[2]
  ];

  return orderedCategories;
};

const getCategoryId = async categoryName => {
  const categories = await getCategories();
  const filtered = categories.filter(
    category => category.name.toLowerCase().replace(/-/g, '') === categoryName
  );
  return filtered[0].id;
};

export default {
  getCategories,
  getFrontPageCategories,
  getCategoryId
};
