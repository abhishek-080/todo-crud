import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: new Date().getTime(),
      text: input,
    };
    setTodos([...todos].concat(newTodos));
    setTodos([...todos, newTodos]);
    setInput("");
  };

  function handleDelete(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function saveEdit(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editInput;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditInput("");
    setEditTodo(null);
  }

  return (
    <div className="flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Todo Lists</h1>
        <form onSubmit={handleSubmit} className="py-5 	">
          <input className="border fs-4 border-solid rounded text-dark text-sm p-1 mr-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the todo"
          />
          <button className="bg-black text-white text-sm px-2 py-1 rounded-lg">Add</button>
        </form>
        <ul className="border border-dark p-3 rounded  px-5">
          {todos.map((todo) => (
            <li key={todo.id}>
              {editTodo === todo.id ? (
                <span>
                  <input className="border fs-4 border-solid rounded text-dark text-sm p-1 mr-2"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                </span>
              ) : (
                <div>{todo.text}</div>
              )}

              <div className="flex items-center gap-3 py-2">
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 px-5 py-2 rounded-lg text-xs"
                >
                  delete
                </button>
                <button
                  onClick={() => setEditTodo(todo.id)}
                  className="px-5 py-2 rounded-lg bg-gray-300 text-xs"
                >
                  Edit
                </button>
                {editTodo ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="bg-teal-400 px-5 py-2 rounded-lg text-xs"
                  >
                    Update
                  </button>
                ) : (
                  ""
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}