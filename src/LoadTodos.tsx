import React from "react";
import store from "./store";
import { observer } from "mobx-react-lite";

const LoadTodos = (): JSX.Element => {
  const onLoadHandler = (): void => {
    store.load();
  };
  return (
    <div className="row justify-content-end m-2">
      <div className="col-4 bg-light">
        <div className="d-flex align-items-center">
          <div className="btn btn-link" onClick={onLoadHandler}>
            Load
          </div>
          {store.loading && (
            <div className="spinner-border spinner-border-sm" role="status" />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(LoadTodos);
