import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditingId(null);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Todo List
      </h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow hover:bg-zinc-700 transition-colors"
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-zinc-700 text-white px-2 py-1 rounded"
              />
            ) : (
              <span className="text-lg text-white">{todo.text}</span>
            )}

            <div className="flex space-x-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                  aria-label="Save"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => handleUpdate(todo.id, todo.text)}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                  aria-label="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition-colors"
                aria-label="Delete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
