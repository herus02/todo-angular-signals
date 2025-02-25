import { Component, signal, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html'
})
export class TodoInputComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodoText = '';

  emitNewTodo() {
    if (this.newTodoText.trim()) {
      this.addTodo.emit(this.newTodoText.trim());
      this.newTodoText = '';
    }
  }
}