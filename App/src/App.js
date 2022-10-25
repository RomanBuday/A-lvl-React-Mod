import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login/login';
import Store from './components/Store/store';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/404';
import Register from './components/Register/register';
import Cart from './components/Cart/cart';

import './scss/main.scss';

function App() {
  return (
    <div className="page__body">
      <div className="site-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/userPage' element={<Profile />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
