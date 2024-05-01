import React, { useState } from "react";

interface EditProps {
  index: number;
  task: string;
  onClose: () => void;
  onUpdateTask: (index: number, task: string) => void;
}

const Edit : React.FC<EditProps> = ({ index, task, onClose, onUpdateTask }) => {
  const [editedTask, setEditedTask] = useState<string>(task);

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    onUpdateTask(index, task); 
    onClose(); 
  };

  return (
    <div className="z-10 absolute h-screen flex justify-center items-center bg-slate-50 bg-opacity-20 top-0 left-0 w-screen">
      <div className="w-[300px] h-[300px] bg-white px-4 py-3 rounded shadow">
        <label htmlFor="edit" className="text-green-700">
          Edit :
        </label>
        <input
          id="edit"
          type="text"
          className="border border-green-700"
          value={editedTask}
          onChange={handleEditInput}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Edit;
