import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchvalue",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
  },
});
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
