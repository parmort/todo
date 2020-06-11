import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const load = createAction('[Todo] Load');

export const loadSuccess = createAction(
  '[Todo] Load Success',
  props<{ payload: Todo[] }>()
);

export const create = createAction('[Todo] Create', props<{ name: string }>());

export const createSuccess = createAction(
  '[Todo] Create Success',
  props<{ payload: Todo }>()
);

export const edit = createAction(
  '[Todo] Update',
  props<{ id: number; data: { name: string } }>()
);

export const editSuccess = createAction(
  '[Todo] Update Success',
  props<{ payload: Todo }>()
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

export const destroySuccess = createAction(
  '[Todo] DestroySuccess',
  props<{ id: number }>()
);
