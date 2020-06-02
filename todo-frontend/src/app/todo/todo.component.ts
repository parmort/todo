import { Component, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() update = new EventEmitter<string>();

  constructor(private todoService: TodoService) {}

  complete(): void {
    this.todoService.complete(this.todo.id).subscribe((t: Todo) => {
      timer(150).subscribe(_ => {
        this.todo = t;
        this.update.emit('complete');
      });
    });
  }

  uncomplete(): void {
    this.todoService.uncomplete(this.todo.id).subscribe((t: Todo) => {
      timer(150).subscribe(_ => {
        this.todo = t;
        this.update.emit('uncomplete');
      });
    });
  }

  delete(): void {
    this.todoService.deleteTodo(this.todo.id).subscribe(_ => {
      this.update.emit('delete');
    });
  }
}
