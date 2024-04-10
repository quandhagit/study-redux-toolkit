import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import todoReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
