import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PhotoMap } from "../../Types";
interface initialState {
  photos: PhotoMap;
  fullphoto: string;
}
const initialState = {
  photos: [],
  fullphoto: "",
};
export const photoSlice = createSlice({
  name: "photo",
  initialState: initialState,
  reducers: {
    setPhotos: (state, actions: PayloadAction<PhotoMap[]>) => {
      state.photos = actions.payload;
    },
    setFullPhoto: (state, actions: PayloadAction<string>) => {
      state.fullphoto = actions.payload;
    },
  },
});
export const { setPhotos, setFullPhoto } = photoSlice.actions;
export default photoSlice.reducer;
