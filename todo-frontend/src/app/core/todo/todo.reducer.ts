import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

function updateAll(_: Todo[], action: { payload: Todo[] }): Todo[] {
  return action.payload;
}

function updateOne(state: Todo[], action: { payload: Todo }): Todo[] {
  return [
    ...state.filter(todo => todo.id !== action.payload.id),
    action.payload,
  ];
}

const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadSuccess, updateAll),
  on(TodoActions.completeSuccess, updateOne),
  on(TodoActions.uncompleteSuccess, updateOne)
);

export function reducer(state: Todo[] | undefined, action: Action) {
  return todoReducer(state, action);
}
