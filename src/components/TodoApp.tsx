import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className=" bg-green-100">
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoApp;
