import { createContext, ReactNode, useReducer } from "react";

type TasksContentType = {
  tasks: string[];
  addTask: (task: string) => void;
  updateTask: ( task: string, index: number) => void;
  deleteTask: ( index: number) => void;
};

const TasksContext = createContext<TasksContentType | undefined>(undefined);

type Action =
   { type: "ADD_TASK"; payload: string } |
   { type: "UPDATE_TASK"; payload: { task: string, index: number;  } } |
   { type: "DELETE_TASK"; payload: number};

const tasksReducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task, index) =>
        index === action.payload.index ? action.payload.task : task
      );
    case "DELETE_TASK":
      return state.filter((task, index) => index !== action.payload);
    default:
      return state;
  }
};

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const addTask = (task: string) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const updateTask = ( task: string, index: number) => {
    dispatch({ type: "UPDATE_TASK", payload: { index, task } });
  };

  const deleteTask = (index: number) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  }
  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};


