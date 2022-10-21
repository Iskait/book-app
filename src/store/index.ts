import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";
import booksReducer from "./slices/booksSlice";
import cardReducer from "./slices/cardSlice";
const store = configureStore({
  reducer: {
    input: inputReducer,
    books: booksReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
