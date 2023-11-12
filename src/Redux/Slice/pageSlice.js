import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "pages",
  initialState: {
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
  },
});
export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
