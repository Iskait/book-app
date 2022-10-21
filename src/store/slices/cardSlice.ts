import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardState from "../../types/CardState";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    image: "",
    categories: [],
    title: "",
    authors: [],
    description: "",
    infoLink: "",
  } as CardState,
  reducers: {
    setCard: (state, action: PayloadAction<CardState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;
