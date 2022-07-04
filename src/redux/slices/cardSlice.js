import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        image: '',
        categories: [],
        title: '',
        authors: [],
        description: [],
        infoLink: '',
    },
    reducers: {
        setCard: (state, action) => {
            state = action.payload;
            return state;
        },
    }
})

export const { setCard } = cardSlice.actions;

export default cardSlice.reducer;