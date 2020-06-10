import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoService } from '../core/todo/todo.service';
import { Todo, TodoSorters } from '../core/todo/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.update();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url === '/') {
        this.update();
      }
    });
  }

  update(): void {
    this.todos = this.todoService
      .getTodos()
      .pipe(map((t: Todo[]) => t.sort(TodoSorters.byComplete)));
  }
}
