import './styles/App.css';
import { Outlet } from 'react-router-dom';

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
        cartVisible={cartVisible}
        closeMenus={closeMenus}
        menuVisible={menuVisible}
        setCartVisible={setCartVisible}
        setMenuVisible={setMenuVisible}
        setUpdateCart={setUpdateCart}
        updateCart={updateCart}
      />
      <Outlet context={[closeMenus]} />
    </div>
  );
}

export default App;
