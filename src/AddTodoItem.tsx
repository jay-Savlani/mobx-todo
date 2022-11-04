import React, { ChangeEvent, KeyboardEvent } from "react";
import { observer } from "mobx-react-lite";

import store from "./store";

const AddTodoItem = (): JSX.Element => {
  const addTodoHandler = (): void => {
    store.addTodo();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    store.newTodo = event.target.value;
  };

  const onEnterHandler = (e: KeyboardEvent, newTodo: string) => {
    if (e.key === "Enter") store.addTodo();
  };

  return (
    <div className="row mt-2">
      <div className="col-10 p-0">
        <input
          className="add-todo-input"
          value={store.newTodo}
          placeholder="Add Todo..."
          onChange={changeHandler}
          onKeyUp={(e) => onEnterHandler(e, store.newTodo)}
        />
      </div>
      <div className="col-2">
        <button
          className="btn btn-outline-primary btn-sm "
          onClick={addTodoHandler}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default observer(AddTodoItem);
