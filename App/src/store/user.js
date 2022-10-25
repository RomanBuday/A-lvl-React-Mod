import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    set(state, action) {
      state = action.payload;
    },
    remove(state) {
      state = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, remove } = userSlice.actions

export default userSlice.reducer