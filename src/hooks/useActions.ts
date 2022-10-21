import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

import { cardActions } from "../store/slices/cardSlice";
import { bookActions } from "../store/slices/booksSlice";
import { fetchBooks } from "../store/slices/booksSlice";
import { inputActions } from "../store/slices/inputSlice";

const actions = {
  fetchBooks,
  ...cardActions,
  ...bookActions,
  ...inputActions,
};

const useAppDispatch: () => AppDispatch = useDispatch;

const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
