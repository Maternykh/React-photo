import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const likedphotos: number = 0;
export const likeSlice = createSlice({
  name: "likes",
  initialState: {
    likedphotos: likedphotos,
  },
  reducers: {
    setLikedPhotos: (state, actions: PayloadAction<number>) => {
      state.likedphotos = actions.payload;
    },
  },
});
export const { setLikedPhotos } = likeSlice.actions;
export default likeSlice.reducer;
