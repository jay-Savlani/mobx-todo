import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoadTodos from "./LoadTodos";
import TodoItemsList from "./TodoItemsList";
import AddTodoItem from "./AddTodoItem";

function App() {
  return (
    <div className="container-md">
      <LoadTodos />
      <TodoItemsList />
      <AddTodoItem />
    </div>
  );
}

export default App;
