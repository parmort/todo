import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { TodoService } from '../core/todo.service';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';
import { Todo } from '../core/todo/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../core/app.state';
import * as TodoActions from '../core/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() update = new EventEmitter<string>();

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  complete(): void {
    this.store.dispatch(TodoActions.complete({ id: this.todo.id }));
  }

  uncomplete(): void {
    this.store.dispatch(TodoActions.uncomplete({ id: this.todo.id }));
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

    formDialog.afterClosed().subscribe(res => {
      if (!res) return;
      this.todoService
        .editTodo(this.todo.id, res)
        .subscribe(_ => this.update.emit('edit'));
    });
  }
}
