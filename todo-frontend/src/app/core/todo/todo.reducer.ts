import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadSuccess, (_, action) => action.payload)
);

export function reducer(state: Todo[] | undefined, action: Action) {
  return todoReducer(state, action);
}
