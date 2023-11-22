import { createSlice } from "@reduxjs/toolkit";
const dark: boolean = true;
export const themeSlice = createSlice({
  name: "themes",
  initialState: {
    dark: dark,
  },
  reducers: {
    setDarkTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});
export const { setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
