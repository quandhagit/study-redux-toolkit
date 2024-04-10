import "./App.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todoAdded, todoToggled, todosSelector } from "./redux/todosSlice";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const [value, setValue] = useState("");

  const todoList = useSelector(todosSelector);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input
        className="border border-gray-300 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="px-2 py-1 bg-blue-400"
        onClick={() => dispatch(todoAdded({ text: value, completed: false }))}
      >
        ADD
      </button>
      <div className="text-green-500 font-bold text-2xl">TODO LIST</div>
      {todoList.map((todo) => {
        return (
          <div
            className="shadow rounded-md p-3 border border-gray-200 max-w-[300px]"
            key={todo.id}
          >
            <div className="">{todo.text}</div>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(todoToggled(todo.id))}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default App;
