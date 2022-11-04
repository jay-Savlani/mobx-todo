import React from "react";
import store, { todo } from "./store";
import { observer } from "mobx-react-lite";

const TodoItemsList = (): JSX.Element => {
  const onChangeHandler = (todo: todo) => {
    store.toggleTodo(todo);
  };

  const onDeleteHandler = (id: number) => {
    store.removeTodo(id);
  };

  return (
    <>
      {store.todos.map((todo: todo) => {
        return (
          <div className="row align-items-center">
            <div className="col-1">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onChangeHandler(todo)}
              />
            </div>
            <div className="col-9 bg-light p-0">{todo.task}</div>
            <div className="col-2">
              <div
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDeleteHandler(todo.id)}
              >
                Delete
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default observer(TodoItemsList);
