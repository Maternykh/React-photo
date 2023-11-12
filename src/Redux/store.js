import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slice/themeSlice";
import filterReducer from "./Slice/filterSlice";
import searchReducer from "./Slice/searchSlice";
import pageReducer from "./Slice/pageSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    categ: filterReducer,
    searchvalue: searchReducer,
    pages: pageReducer,
  },
});
