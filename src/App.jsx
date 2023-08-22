import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoContext from "./Components/Context/TodoContext";
import TodoList from "./Components/TodoLists/TodoList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      todoData: "Todo1",
      finished: false,
    },
    {
      id: 2,
      todoData: "Todo2",
      finished: false,
    },
  ]);
  return (
    <>
      <TodoContext.Provider value={{ list, setList }}>
        <AddTodo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, todoData: todo, finished: false },
            ])
          }
        />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
