import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: "never",
});

export type todo = {
  id: number;
  done: boolean;
  task: string;
};

class MobxStore {
  todos: todo[] = [];
  newTodo: string = " ";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(): void {
    this.todos.push({
      id: Math.max(0, ...this.todos.map((todo) => todo.id)) + 1,
      done: false,
      task: this.newTodo,
    });
    this.newTodo = "";
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo = (todo: todo): void => {
    todo.done = !todo.done;
  };
}

const store = new MobxStore();

export default store;
