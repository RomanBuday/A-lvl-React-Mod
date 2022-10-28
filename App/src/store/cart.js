import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserCart, setUserCart } from '../firebase';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (email) => {
    const cartItems = await getUserCart(email);
    return cartItems;
  }
)

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({userId, items}) => {
    await setUserCart(userId, items);
    return items;
  }
)

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async ({userId, items}) => {
    await setUserCart(userId, items);
    return items;
  }
)

const defaultReducer = (state, action) => {
  state.items = action.payload;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: []},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, defaultReducer);
    builder.addCase(addToCart.fulfilled, defaultReducer);
    builder.addCase(removeItemFromCart.fulfilled, defaultReducer);
  },
})


export default cartSlice.reducer