import { createSlice } from '@reduxjs/toolkit'

export const musicSlice = createSlice({
  name: 'music',
  initialState: {songs: []},
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSongs } = musicSlice.actions

export default musicSlice.reducer