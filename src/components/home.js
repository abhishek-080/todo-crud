import { useState } from "react";

export default function Todo() {

    const [input, setInput]= useState("");
    const [list, setList] = useState([]);

    const handlesubmit = (e) => {
        e.preventDefault();

        const newList = {
            id: new Date().getTime(),
            text:input

        }
    }


  return (
    <div className="flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Todo Lists</h1>
        <form onSubmit={handlesubmit}  className="py-5 	">
          <input className="border fs-4 border-solid rounded text-dark text-sm p-1 mr-2"
            value={input}
            onClick ={ (e)=>setInput(e.target.value)}
            placeholder="Enter the todo"
          />
          <button className="bg-black text-white text-sm px-2 py-1 rounded-lg">Add</button>
        </form>
       
      </div>
    </div>
  );
}