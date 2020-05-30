import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import { Todo, todoSorters } from '../todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.todos = this.todoService
      .getTodos()
      .pipe(map((t: Todo[]) => t.sort(todoSorters.complete)));
  }
}
