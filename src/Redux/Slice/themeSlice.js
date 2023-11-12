import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: true,
  },
  reducers: {
    setDarkTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});
export const { setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
