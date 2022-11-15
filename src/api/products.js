import axios from 'axios';
import products from './productData';

const getProducts = async () => {
  // This is commented out because the API is no longer functional.
  // Using local data instead.

  // let products;

  // await axios
  //   .get('https://frend-ecom-api.azurewebsites.net/Product')
  //   .then(res => (products = res.data));

  return products;
};

const getProduct = async id => {
  // This is commented out because the API is no longer functional.
  // Using local data instead.

  // let product;

  // await axios
  //   .get(`https://frend-ecom-api.azurewebsites.net/Product/${id}`)
  //   .then(res => (product = res.data));

  const product = products.filter(prod => prod.id == id)[0]

  return product;
};

const getVariant = (product, variantName) => {
  const variant = product.variants.filter(
    v => v.name.toLowerCase() == variantName
  );

  if (variant.length === 0) return null;

  return variant[0];
};

const getItemsOfCategory = async categoryId => {
  const items = await getProducts();
  const itemsOfCategory = items.filter(item => item.categoryId == categoryId);
  return itemsOfCategory;
};

const productsApi = {
  getProducts,
  getProduct,
  getVariant,
  getItemsOfCategory
};

export default productsApi;
