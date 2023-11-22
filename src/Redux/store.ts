import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slice/filterSlice";
import themeReducer from "./Slice/themeSlice";
import likeReducer from "./Slice/likeSlice";
import photoReducer from "./Slice/photoSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    themes: themeReducer,
    likes: likeReducer,
    photo: photoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
