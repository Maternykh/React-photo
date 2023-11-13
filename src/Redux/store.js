import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slice/filterSlice";
import themeReducer from "./Slice/themeSlice";
export default configureStore({
  reducer: {
    filter: filterReducer,
    themes: themeReducer,
  },
});
