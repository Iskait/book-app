import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './slices/inputSlice';
import booksReducer from './slices/booksSlice';
import cardReducer from './slices/cardSlice';
export const store = configureStore({
    reducer: {
        input: inputReducer,
        books: booksReducer,
        card: cardReducer,
    }
})
