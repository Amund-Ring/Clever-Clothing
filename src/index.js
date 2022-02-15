import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import App from './App';
import Home from './routes/Home';
import Products from './routes/Products';


ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='products/:category' element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
