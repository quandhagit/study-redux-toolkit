import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type todoType = {
  id: number;
  text: string;
  completed: boolean;
};

const initialState: todoType[] = [{ id: 1, text: "abc", completed: true }];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.push({
        id: (state.at(-1)?.id || 0) + 1,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (!todo) return;
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export const todosSelector = (state: RootState) => state.todoList;
export default todosSlice.reducer;
