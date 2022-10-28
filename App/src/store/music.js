import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAllSongs = createAsyncThunk(
  'music/fetchAllSongs',
  async () => {
    const response = await fetch(
      'https://6351911a9d64d7c713032106.mockapi.io/api/music'
    );
    const json = await response.json();
    return json;
  }
)

export const musicSlice = createSlice({
  name: 'music',
  initialState: {songs: [], error: null},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllSongs.fulfilled, (state, action) => {
      state.songs = action.payload;
    });
  },
})

// Action creators are generated for each case reducer function
export const { setSongs } = musicSlice.actions

export default musicSlice.reducer