import './styles/App.css';
import { Outlet, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {


  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
