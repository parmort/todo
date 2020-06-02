import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { TodoService } from '../todo.service';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() update = new EventEmitter<string>();

  constructor(private todoService: TodoService, private dialog: MatDialog) {}

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

  edit(): void {
    const formDialog = this.dialog.open(TodoFormDialogComponent, {
      data: { name: this.todo.name },
    });

    formDialog
      .afterClosed()
      .subscribe(res => {
        if (!res) return;
        this.todoService
          .editTodo(this.todo.id, res)
          .subscribe(_ => this.update.emit('edit'))
      });
  }
}
