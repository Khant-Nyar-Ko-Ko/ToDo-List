import TodoItem from "./TodoItem";

interface TodoListProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks }) => {
  const handleEdit = (index: number, updatedTask: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleDelete = (index: number) => {
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
          onEdit={(editedTask) => handleEdit(taskIndex, editedTask.toString())} // Convert index to string
          onDelete={() => handleDelete(taskIndex)}
        />
      ))}
    </div>
  );
};

export default TodoList;
