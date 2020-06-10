import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { Todo } from './todo.model'

const selectFeatureState = (state: AppState) => state.todos;

function byId (a: Todo, b: Todo): number {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
}

function byComplete (a: Todo, b: Todo): number {
  if (a.complete === b.complete) return byId(a, b);
  if (a.complete) return 1;
  if (!a.complete) return -1;
}

export const selectTodos = createSelector(
  selectFeatureState,
  (state: Todo[]) => state.slice().sort(byComplete)
);
