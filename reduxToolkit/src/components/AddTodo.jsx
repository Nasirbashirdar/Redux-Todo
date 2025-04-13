import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(""); // Clear input after adding todo
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex justify-center items-center space-x-4 mt-8"
    >
      <input
        type="text"
        className="bg-zinc-800 rounded-lg border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 text-gray-100 py-2 px-4 w-full max-w-md placeholder-gray-400 transition-all duration-200"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-lg transition-all duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
