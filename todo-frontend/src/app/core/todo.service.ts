import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL}/${id}`);
  }

  complete(id: number): Observable<Todo> {
    return this.http.post<Todo>(`${this.URL}/complete/${id}`, {});
  }

  uncomplete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.URL}/complete/${id}`);
  }

  editTodo(id: number, formData: { name: string }): Observable<Todo> {
    return this.http.put<Todo>(`${this.URL}/${id}`, formData);
  }

  createTodo(formData: { name: string }): Observable<Todo> {
    return this.http.post<Todo>(this.URL, formData);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.URL}/${id}`);
  }
}
