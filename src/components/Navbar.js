import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import axios from 'axios';
import { BiCart } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import categoriesAPI from '../api/categories';

function Navbar({
  menuVisible,
  setMenuVisible,
  cartVisible,
  setCartVisible,
  closeMenus
}) {
  // const [menuVisible, setMenuVisible] = useState(false);
  // const [cartVisible, setCartVisible] = useState(false);
  const [cartInstantHide, setCartInstantHide] = useState(false);

  const [categories, setCategories] = useState([]);

  const getCategories = async () =>
    setCategories(await categoriesAPI.getCategories());

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
            </animated.div>
          ) : (
            ''
          )
        )}
    </nav>
  );
}

export default Navbar;
