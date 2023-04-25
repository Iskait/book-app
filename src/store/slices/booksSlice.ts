import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, url } from "../../exports/constants";
import BooksState from "../../types/BooksState";
import ApiResponse from "../../types/ApiResponse";
import { RootState } from "../";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { getState }) => {
    const { input, books } = getState() as RootState;
    const { data } = await axios.get<ApiResponse>(url, {
      params: {
        q: input,
        key: API_KEY,
        orderBy: books.sorting,
        startIndex: books.items.length,
        maxResults: 30,
      },
    });
    return data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    status: "idle",
    loadmore: "idle",
    category: "All",
    sorting: "relevance",
    totalItems: 0,
    items: [],
  } as BooksState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    sortBy: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "success";
        state.totalItems = action.payload.totalItems;
        state.items.push(...action.payload.items);
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = "reject";
      });
  },
});

export const bookActions = booksSlice.actions;

export default booksSlice.reducer;
