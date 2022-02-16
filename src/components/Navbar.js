import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { BiCart } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import '../styles/Navbar.css';
import categoriesAPI from '../api/categories';
import CartItem from './CartItem';
import shoppingCartApi from '../api/shoppingCart';

function Navbar({
  menuVisible,
  setMenuVisible,
  cartVisible,
  setCartVisible,
  closeMenus
}) {
  const [cartInstantHide, setCartInstantHide] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);



  const updateState = async () => {
    setCategories(await categoriesAPI.getCategories());
    const cart = await shoppingCartApi.getCartFromLocalStorage();
    setShoppingCart(cart);
    setCartIsEmpty(!cart.length > 0);
    const sum = await shoppingCartApi.getTotalSum();
    setSumTotal(sum);
  };

  useEffect(() => {
    updateState();
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
      <div className='mobileLogoContainer'>
        <Link to='/' onClick={closeMenus}>
          <img src={logo} className='mobileLogo' />
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
                      <CartItem cartItem={cartItem} closeMenus={closeMenus} key={cartItem.id} />  
                    )}
                  </div>
                </div>
              )}

              <div className='totalContainer'>
                <p className='total'>
                  Total: <span>{Number(sumTotal).toLocaleString('no')}</span> NOK
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
