import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}