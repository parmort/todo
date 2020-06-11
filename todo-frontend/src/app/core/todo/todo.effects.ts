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

  completeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.complete),
      mergeMap(({ id }) =>
        this.todoService.complete(id).pipe(
          map(todo => TodoActions.completeSuccess({ payload: todo })),
          catchError(_ => EMPTY)
        )
      )
    )
  );

  uncompleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.uncomplete),
      mergeMap(({ id }) =>
        this.todoService.uncomplete(id).pipe(
          map(todo => TodoActions.uncompleteSuccess({ payload: todo })),
          catchError(_ => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
