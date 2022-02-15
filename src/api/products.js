import axios from 'axios';

const getProducts = async () => {
  let products;

  await axios
    .get('https://frend-ecom-api.azurewebsites.net/Product')
    .then(res => (products = res.data));

  return products;
};

const getItemsOfCategory = async categoryId => {
  const items = await getProducts();
  const itemsOfCategory = items.filter(item => item.categoryId == categoryId);
  return itemsOfCategory;
};

export default {
  getProducts,
  getItemsOfCategory
};
