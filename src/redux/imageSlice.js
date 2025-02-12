import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageSrc: './H-black.png',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    changeImage: (state, action) => {
      state.imageSrc = action.payload;
    },
  },
});

export const { changeImage } = imageSlice.actions;
export default imageSlice.reducer;