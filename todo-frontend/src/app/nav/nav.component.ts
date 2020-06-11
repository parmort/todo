import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';
import { AppState } from '../core/app.state';
import * as TodoActions from '../core/todo/todo.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.router.onSameUrlNavigation = 'reload';
  }

  openCreate(): void {
    const formDialog = this.dialog.open(TodoFormDialogComponent, {
      data: { name: '' },
    });

    formDialog.afterClosed().subscribe(data => {
      if (!data) return;
      this.store.dispatch(TodoActions.create(data));
    });
  }
}
