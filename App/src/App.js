import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/cart';
import Store from './components/Store/store';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NotFound from './components/NotFound/404';
import Profile from './components/Profile/profile';
import SongPage from './components/SongPage/songPage';

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
            <Route path='/profile' element={<Profile />} />
            <Route path='/song/:itemId' element={<SongPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
