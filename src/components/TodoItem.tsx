import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";

interface TodoItemProps {
  index: number;
  task: string;
  onEdit: (index: number, task: string) => void;
  onDelete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, task, onEdit, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task); 

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedTask(task); 
  };

  const handleDeleteClick = () => {
    onDelete(index);
  };

  const handleUpdateTask = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className="px-5 py-4 rounded text-left w-full flex justify-between">
      <div className="flex gap-5 py-1">
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={handleEditInputChange}
            className="text-black"
          />
        ) : (
          <h3 className={`text-white ${isChecked && "line-through"}`}>{editedTask}</h3>
        )}
      </div>
      <div className="flex gap-3">
        <button
          className="px-4 py-1 bg-white text-green-700 text-sm flex items-center justify-center gap-2 w-24 rounded"
          onClick={isEditing ? handleUpdateTask : handleEditClick}
        >
          {isEditing ? "Save" : "Edit"} <FaRegEdit />
        </button>
        <button
          className="px-4 py-1 bg-white text-red-700 text-sm flex items-center justify-center gap-2 w-24 rounded"
          onClick={handleDeleteClick}
        >
          Delete <ImBin />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
