import Header from "./layouts/Header";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <>
      <div className=" bg-green-100 h-screen">
        <Header />
        <TodoApp />
      </div>
    </>
  );
};

export default App;
