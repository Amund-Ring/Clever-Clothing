import axios from 'axios';

const getProducts = async () => {
  let products;

  await axios
    .get('https://frend-ecom-api.azurewebsites.net/Product')
    .then(res => (products = res.data));

  return products;
};

const getProduct = async id => {
  let product;

  await axios
    .get(`https://frend-ecom-api.azurewebsites.net/Product/${id}`)
    .then(res => (product = res.data));

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
