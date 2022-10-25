import { createSlice } from '@reduxjs/toolkit'
//import user from './user';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {search: '', sort: {price: false}},
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: state => {
      state.sort.price = !state.sort.price;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSearch, setSort } = filterSlice.actions

export default filterSlice.reducer
