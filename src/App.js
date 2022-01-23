import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Login from './Components/login';
import Dashboard from './Components/dashboard';
import ProductDetail from './Components/ProductDetail';
import { PrivateRoute } from './routes';
import { isAuth } from './utils/userAuth';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
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
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
