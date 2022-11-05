import { makeAutoObservable, configure } from "mobx";
import data from "./todos.json";

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
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  load(): void {
    this.loading = true;
    setTimeout(() => {
      this.todos = data;
      this.loading = false;
    }, 1500);
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
