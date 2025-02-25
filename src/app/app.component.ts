import { Component, signal } from '@angular/core';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  templateUrl: './app.component.html'
})
export class App {
  todos = signal<Todo[]>([]);

  addTodo(text: string) {
    this.todos.update(todos => [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  }

  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }
}