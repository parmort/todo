import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const load = createAction('[Todo] Load');

export const loadSuccess = createAction(
  '[Todo] Load Success',
  props<{ payload: Todo[] }>()
);

export const create = createAction('[Todo] Create', props<{ name: string }>());

export const update = createAction(
  '[Todo] Update',
  props<{ id: number; name: string }>()
);

export const complete = createAction(
  '[Todo] Complete',
  props<{ id: number }>()
);

export const completeSuccess = createAction(
  '[Todo] Complete Success',
  props<{ payload: Todo }>()
);

export const uncomplete = createAction(
  '[Todo] Uncomplete',
  props<{ id: number }>()
);

export const uncompleteSuccess = createAction(
  '[Todo] Uncomplete Success',
  props<{ payload: Todo }>()
);

export const destroy = createAction('[Todo] Destroy', props<{ id: number }>());
