import React, { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import '../styles/Product.css';
import productsAPI from '../api/products';
import VariantPicker from '../components/VariantPicker';
import AddToCartButton from '../components/AddToCartButton';
import categoriesApi from '../api/categories';

function Product({ location }) {
  const { id, variantName } = useParams();
  const [product, setProduct] = useState();
  const [productVariant, setProductVariant] = useState();
  const [closeMenus] = useOutletContext();
  const [category, setCategory] = useState('');

  const getProduct = async () => {
    const productItem = await productsAPI.getProduct(id);
    setProduct(productItem);

    if (!variantName) return setProductVariant(productItem.variants[0]);

    const variant = productsAPI.getVariant(productItem, variantName);
    setProductVariant(variant);

    const categoryId = productItem.categoryId[0];
    const productCategory = await categoriesApi.getCategoryName(categoryId);

    console.log(productCategory);
    setCategory(productCategory);
  };

  useEffect(() => {
    getProduct();
  }, [id, variantName]);

  if (!product) return <main className='productPage'>404 Page not found</main>;
  if (!productVariant)
    return <main className='productPage'>404 Page not found</main>;

  return (
    <main className='productPage'>
      <Link to={`/products/${category}`} className='backArrowContainer' onClick={closeMenus}>
        <BiArrowBack className='backArrow' />
      </Link>
      <div className='productContainer'>
        <div
          className='productImage'
          style={{ backgroundImage: `url(${productVariant.image})` }}
        >
          {productVariant.stock === 0 && (
            <div className='productPageNoStock'></div>
          )}
          {productVariant.stock === 0 && (
            <div className='productPageNoStock-banner'>
              <div>OUT OF STOCK</div>
            </div>
          )}
        </div>
        <div className='productDetails'>
          <p className='productDetailsName'>{`${product.name} - ${productVariant.name}`}</p>
          <p className='productDetailsPrice'>
            <span>{Number(1100).toLocaleString('no')}</span> NOK
          </p>
          <div>
            <p className='productDetailsDescription'>Description:</p>
            <p>{product.description}</p>
          </div>

          <div>
            <p className='variantPickerContainerTitle'>Available variants:</p>
            <div className='variantPickerContainer'>
              {product.variants.map(v => (
                <VariantPicker
                  color={v.name.toLowerCase()}
                  productID={product.id}
                  key={`${product.id}.${v.id}`}
                />
              ))}
            </div>
          </div>

          <AddToCartButton
            productItem={product}
            productVariant={productVariant}
            disabled={productVariant.stock === 0}
          />
        </div>
      </div>
    </main>
  );
}

export default Product;
