import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.router.onSameUrlNavigation = 'reload';
  }

  openCreate(): void {
    const formDialog = this.dialog.open(TodoFormDialogComponent, {
      data: { name: '' },
    });

    formDialog.afterClosed().subscribe(res => {
      if (!res) return;
      this.todoService
        .createTodo(res)
        .subscribe(_ => this.router.navigateByUrl(''));
    });
  }
}
