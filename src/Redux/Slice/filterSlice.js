import { createSlice } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedCateg: 0,
    currentPage: 1,
    search: "",
  },
  reducers: {
    setSelectedCateg: (state, actions) => {
      state.selectedCateg = actions.payload;
    },
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
  },
});
export const { setSelectedCateg, setCurrentPage, setSearch } =
  filterSlice.actions;
export default filterSlice.reducer;
