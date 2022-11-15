import axios from 'axios';
import categories from './categoryData';

const getCategories = async () => {
  // This is commented out because the API is no longer functional.
  // Using local data instead.

  // let categories;

  // await axios
  //   .get('https://frend-ecom-api.azurewebsites.net/Category')
  //   .then(res => (categories = res.data));


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

  if (filtered[0]) return filtered[0].id;
};

const getCategoryName = async categoryId => {
  const categories = await getCategories();
  const filtered = categories.filter(category => category.id === categoryId);
  if (filtered[0]) return filtered[0].name.toLowerCase().replace('-', '');
};

const categoriesApi = {
  getCategories,
  getFrontPageCategories,
  getCategoryId,
  getCategoryName
};

export default categoriesApi;
