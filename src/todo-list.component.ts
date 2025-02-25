import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoItemComponent],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  @Input({ required: true }) todos: Todo[] = [];
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}