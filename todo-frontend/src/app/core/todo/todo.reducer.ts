import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

function updateOne(state: Todo[], action: { payload: Todo }): Todo[] {
  return [
    ...state.filter(todo => todo.id !== action.payload.id),
    action.payload,
  ];
}

const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadSuccess, (_, action) => action.payload),
  on(TodoActions.completeSuccess, updateOne),
  on(TodoActions.uncompleteSuccess, updateOne),
  on(TodoActions.createSuccess, updateOne),
  on(TodoActions.editSuccess, updateOne),
  on(TodoActions.destroySuccess, (state, action) =>
    state.filter(todo => todo.id !== action.id)
  )
);

export function reducer(state: Todo[] | undefined, action: Action) {
  return todoReducer(state, action);
}
