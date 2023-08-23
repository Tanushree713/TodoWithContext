import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoContext from "./Components/Context/TodoContext";
import TodoList from "./Components/TodoLists/TodoList";
import { useReducer } from "react";
import TodoReducer from "./Reducer/TodoReducer";
import TodoDispatchContext from "./Components/Context/TodoDispatchContext";

function App() {
  const [list, dispatch] = useReducer( TodoReducer,[]
    // {
    //   id: 1,
    //   todoData: "Todo1",
    //   finished: false,
    // },
    // {
    //   id: 2,
    //   todoData: "Todo2",
    //   finished: false,
    // },

  );
  return (
    <>
      <TodoContext.Provider value={{ list}}>
        <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo/>
        <TodoList />
        </TodoDispatchContext.Provider>
       
      </TodoContext.Provider>
    </>
  );
}

export default App;
