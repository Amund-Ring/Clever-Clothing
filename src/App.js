import './styles/App.css';
import { Outlet, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);

  const closeMenus = () => {
    setMenuVisible(false);
    setCartVisible(false);
    setUpdateCart(bool => !bool);
  };

  return (
    <div className='app'>
      <Navbar
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        cartVisible={cartVisible}
        setCartVisible={setCartVisible}
        closeMenus={closeMenus}
        updateCart={updateCart}
        setUpdateCart={setUpdateCart}
      />
      <Outlet context={[closeMenus]} />
    </div>
  );
}

export default App;
