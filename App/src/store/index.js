
import { configureStore } from '@reduxjs/toolkit';
import user from './user.js';
import music from './music';
import filter from './filter.js';
import cart from './cart.js';

export const store = configureStore({
  reducer: {
    user,
    music,
    filter,
    cart
  },
});