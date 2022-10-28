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


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: []},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
})


export default cartSlice.reducer