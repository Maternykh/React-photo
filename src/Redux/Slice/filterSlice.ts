import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IninitialType } from "../../Types";

const initialState: IninitialType = {
  selectedCateg: 0,
  currentPage: 1,
  search: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCateg: (state, actions: PayloadAction<number>) => {
      state.selectedCateg = actions.payload;
    },
    setCurrentPage: (state, actions: PayloadAction<number>) => {
      state.currentPage = actions.payload;
    },
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
  },
});
export const { setSelectedCateg, setCurrentPage, setSearch } =
  filterSlice.actions;
export default filterSlice.reducer;
