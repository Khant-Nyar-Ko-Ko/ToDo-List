import React, { useState } from "react";

interface TodoFormProps {
  addTask: (task: string) => void;
}

const TodoForm : React.FC<TodoFormProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className=" flex justify-center items-center h-32 ">
      <div className=" bg-gradient-to-r from-[#007F73] to-[#4CCD99] w-2/3 h-20 flex items-center justify-between px-10 rounded shadow">
        <input
          type="text"
          placeholder="Add New Task"
          className=" border px-5 py-3 rounded w-[400px]"
          value={task}
          onChange={handleChange}
        />
        <button
          className=" bg-white text-green-700 text-center px-4 py-2 rounded text-xl"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
