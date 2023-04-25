import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: "" as string,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
