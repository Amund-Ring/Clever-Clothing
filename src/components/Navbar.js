import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { BiCart } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import categoriesAPI from '../api/categories';
import CartItem from './CartItem';

function Navbar({
  menuVisible,
  setMenuVisible,
  cartVisible,
  setCartVisible,
  closeMenus
}) {
  const [cartInstantHide, setCartInstantHide] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([
    {
      item: {
        id: 3,
        name: 'Striped Tee',
        description:
          'The Striped Tee comes in a relaxed and genderless fit and features a hanger patch on the chest and has a folded rib neckline.',
        price: 550,
        categoryId: [0],
        variants: [
          {
            id: 5,
            name: 'Red',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_red.jpeg',
            stock: 8
          },
          {
            id: 6,
            name: 'Yellow',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_yellow.jpeg',
            stock: 5
          },
          {
            id: 7,
            name: 'Aqua',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_aqua.jpeg',
            stock: 0
          }
        ]
      },
      variant: {
        id: 6,
        name: 'Yellow',
        image:
          'https://frend-ecom-api.azurewebsites.net/imgs/striped_tee_yellow.jpeg',
        stock: 5
      }
    },
    {
      item: {
        id: 10,
        name: 'Oslo Tee',
        description:
          'The Oslo Tee is a t-shirt that is made from 100% organic cotton.',
        price: 400,
        categoryId: [0],
        variants: [
          {
            id: 17,
            name: 'Army',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_army.jpeg',
            stock: 4
          },
          {
            id: 18,
            name: 'Navy',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_navy.jpeg',
            stock: 2
          },
          {
            id: 19,
            name: 'White',
            image:
              'https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_white.jpeg',
            stock: 17
          }
        ]
      },
      variant: {
        id: 17,
        name: 'Army',
        image:
          'https://frend-ecom-api.azurewebsites.net/imgs/oslo_tee_army.jpeg',
        stock: 4
      }
    }
  ]);

  const getCategories = async () => {
    setCategories(await categoriesAPI.getCategories());
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleMenuClick = () => {
    setCartInstantHide(true);
    setCartVisible(false);
    setMenuVisible(v => !v);
  };

  const handleCartClick = () => {
    setMenuVisible(false);
    setCartInstantHide(false);
    setCartVisible(v => !v);
  };

  const menuTransition = useTransition(menuVisible, {
    from: { y: -window.innerHeight },
    enter: { y: 0 },
    leave: { y: -window.innerHeight }
  });

  const cartTransition = useTransition(cartVisible, {
    from: { y: -window.innerHeight },
    enter: { y: 0 },
    leave: { y: -window.innerHeight }
  });

  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <Link to='/' className='link' onClick={closeMenus}>
          <h1 className='logo'>Clever Clothing</h1>
        </Link>
      </div>
      <div className='menuIconContainer' onClick={handleMenuClick}>
        <BiMenu className='menuIcon' />
      </div>
      <div className='cartIconContainer' onClick={handleCartClick}>
        <BiCart className='cartIcon' />
      </div>

      {menuTransition((style, item) =>
        item ? (
          <animated.div style={style} className='dropDownMenu'>
            <div className='closeIconContainer'>
              <BsXLg className='closeIcon' onClick={closeMenus} />
            </div>
            <ul>
              <li>
                <Link to='/' className='menuLink' onClick={closeMenus}>
                  Home
                </Link>
              </li>

              {categories.map(function (category) {
                const categoryFormatted = category.name
                  .toLowerCase()
                  .replace(/-/g, '');

                return (
                  <li key={category.id}>
                    <Link
                      to={`/products/${categoryFormatted}`}
                      className='menuLink'
                      onClick={closeMenus}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </animated.div>
        ) : (
          ''
        )
      )}

      {!cartInstantHide &&
        cartTransition((style, item) =>
          item ? (
            <animated.div style={style} className='shoppingCart'>
              <div className='closeIconContainer'>
                <BsXLg className='closeIcon' onClick={closeMenus} />
              </div>

              {cartIsEmpty && (
                <div className='emptyCart'>The shopping cart is empty</div>
              )}

              {!cartIsEmpty && (
                <div className='cartItemContainer'>
                  <div className='cartItem-bg'>
                    {shoppingCart.map(cartItem => 
                      <CartItem cartItem={cartItem} closeMenus={closeMenus}/>  
                    )}
                  </div>
                </div>
              )}

              <div className='totalContainer'>
                <p className='total'>
                  Total: <span>{Number(2400).toLocaleString('no')}</span> NOK
                </p>
                <p>Checkout</p>
              </div>
            </animated.div>
          ) : (
            ''
          )
        )}
    </nav>
  );
}

export default Navbar;
