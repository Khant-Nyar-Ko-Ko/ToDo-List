import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks }) => {
  const handleEdit = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#007F73] to-[#4CCD99] w-2/3 mx-auto px-10 py-3 rounded shadow h-[500px] overflow-scroll">
      {tasks?.map((task, taskIndex) => (
        <TodoItem
          key={taskIndex}
          index={taskIndex} // Pass index to TodoItem
          task={task}
          onEdit={(editedTask) => handleEdit(taskIndex, editedTask)} // Pass updated task
          onDelete={() => handleDelete(taskIndex)}
        />
      ))}
    </div>
  );
};

export default TodoList;
