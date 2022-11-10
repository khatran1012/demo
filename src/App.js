import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Login from './Components/login';
import Dashboard from './Components/dashboard';
import ProductDetail from './Components/ProductDetail';
import { PrivateRoute } from './routes';
import { isAuth } from './utils/userAuth';
import Cart from './Components/cart';

export const MyContext = React.createContext({});

const App = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <MyContext.Provider value={{ cartItems, setCartItems }}>
      <BrowserRouter>
        <div className='App'>
          {
            !isAuth() && (
              <div className='header'>
                <NavLink to="/login">Login</NavLink>
              </div>
            )
          }
          <div className='login-content'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/dashboard/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
