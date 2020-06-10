import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.load),
      mergeMap(_ =>
        this.todoService.getTodos().pipe(
          map(todos => TodoActions.loadSuccess({ payload: todos })),
          catchError(_ => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
