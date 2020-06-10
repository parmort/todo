import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { load } from '../core/todo/todo.actions';
import { selectTodos } from '../core/todo/todo.selectors';
import { Todo } from '../core/todo/todo.model';
import { AppState } from '../core/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.update();
    this.todos$ = this.store.pipe(select(selectTodos));
  }

  update(): void {
    this.store.dispatch(load());
  }
}
