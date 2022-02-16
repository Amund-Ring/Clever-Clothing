import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/Product.css';
import productsAPI from '../api/products';
import VariantPicker from '../components/VariantPicker';

function Product({ location }) {
  const { id, variantName } = useParams();
  const [product, setProduct] = useState();
  const [productVariant, setProductVariant] = useState();

  const getProduct = async () => {
    const productItem = await productsAPI.getProduct(id);
    setProduct(productItem);

    if (!variantName) return setProductVariant(productItem.variants[0]);

    const variant = productsAPI.getVariant(productItem, variantName);
    setProductVariant(variant);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <main className='productPage'>404 Page not found</main>;
  if (!productVariant)
    return <main className='productPage'>404 Page not found</main>;

  return (
    <main className='productPage'>
      <div className='productContainer'>
        <div
          className='productImage'
          style={{ backgroundImage: `url(${productVariant.image})` }}
        ></div>
        <div className='productDetails'>
          <p>{product.name}</p>
          <p>{productVariant.name}</p>
          <p>
            <span>{Number(1100).toLocaleString('no')}</span> NOK
          </p>
          <p>Description:</p>
          <p>{product.description}</p>
          <p>Available variants:</p>
          <VariantPicker color={productVariant.name.toLowerCase()} />
        </div>
      </div>
    </main>
  );
}

export default Product;
