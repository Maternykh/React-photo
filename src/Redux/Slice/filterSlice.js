import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "categ",
  initialState: {
    selectedCateg: 0,
  },
  reducers: {
    setSelectedCateg: (state, actions) => {
      state.selectedCateg = actions.payload;
    },
  },
});
export const { setSelectedCateg } = filterSlice.actions;
export default filterSlice.reducer;
