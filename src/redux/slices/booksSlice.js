import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const fetchData = async (url) => {
    const { data: { totalItems, items } } = await axios.get(url);
    return { totalItems, items: items.map(v=>v.volumeInfo) }
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (url) => fetchData(url)
)

export const fetchMore = createAsyncThunk(
    'books/fetchMore',
    async (url) => fetchData(url)
)

const filter = (state) => {
    state.category === 'All' ? 
    state.filtered = state.items : 
    state.filtered = state.items.filter(item => item.categories && item.categories.includes(state.category));
    state.filtered = state.filtered.filter((item, idx, arr) => arr.map(item=>item.title).indexOf(item.title) === idx);
}

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        status: 'idle',
        loadmore: 'idle',
        category: 'All',
        sorting: 'relevance',
        totalItems: 0,
        items: [],
        filtered: [],
    },
    reducers: {
        filterByCategory: (state, action) => {
            state.category = action.payload.category;
            action.payload.category === 'All' ? 
            state.filtered = state.items : 
            state.filtered = state.items.filter(item => item.categories && item.categories.includes(state.category));
        },
        sortBy: (state, action) => {
            state.sorting = action.payload.sorting;
        }
    },
    extraReducers: {
        [fetchBooks.pending] : (state) => {
            state.status = 'pending';
        },
        [fetchBooks.fulfilled] : (state, action) => {
            state.status = 'success';
            state.totalItems = action.payload.totalItems; 
            state.items = action.payload.items;
            filter(state);
        },
        [fetchBooks.rejected] : (state) => {
            state.status = 'reject';
        },
        [fetchMore.pending] : (state) => {
            state.loadmore = 'pending';
        },
        [fetchMore.fulfilled] : (state, action) => {
            state.loadmore = 'success';
            state.items.push(...action.payload.items);
            filter(state);
        }
    }
})

export const { filterByCategory, sortBy } = booksSlice.actions;

export default booksSlice.reducer;