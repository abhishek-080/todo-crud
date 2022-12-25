import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editedList, setEditedList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      id: new Date().getTime(),
      text: input,
    };
    setList([...list, newList]);
    setInput("");
  };

  const handleDelete = (id) => {
    const updateList = [...list].filter((todo) => todo.id !== id);
    setList(updateList);
  };

  const handleEdit = (id) => {
    const editedList = [...list].map((list) => {
      if (list.id == id) {
        list.text = editInput;
      }
      return list;
    });

    setList(editedList);
    setEditInput("");
    setEditedList(null);
  };

  return (
    <div className="flex-col justify-center">
      <div className="flex flex-col justify-center items-center" >
        <span className="text-2xl">Todo Lists</span>
        <form onSubmit={handleSubmit} className="py-5 ">
          <input
            className="border fs-4 border-solid rounded text-dark text-sm p-1 mr-2 h-11 text-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the todo"
          />
          <button className="bg-black text-white text-sm px-2 py-1 rounded-lg h-10">
            Add
          </button>
        </form>
        <ul className="">
          {list.map((todo) => (
            <li key={todo.id} className="border border-dark w-[15rem] ml-[-3rem] p-3 pl-4 rounded mb-3">
              {editedList == todo.id ? (
                <span>
                  <input
                    className="border fs-4 border-solid rounded text-dark text-sm p-1 mr-2 h-10 text-xsl"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    placeholder="Enter the todo"
                  />
                </span>
              ) : (
                <div className="text-3xl">{todo.text}</div>
              )}

              <div className="flex flex-nowrap items-center gap-2 mt-2 ">
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 p-2 rounded text-xl h-10"
                >
                  delete
                </button>

                {editedList ? (
                  <button
                    onClick={() => handleEdit(todo.id)}
                    className="bg-blue-500 rounded p-2 h-10 text-xl"
                  >
                    update
                  </button>
                ) : (
                  <button
                    onClick={() => setEditedList(todo.id)}
                    className="bg-blue-500 rounded p-2 h-10 text-xl"
                  >
                    Edit
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
