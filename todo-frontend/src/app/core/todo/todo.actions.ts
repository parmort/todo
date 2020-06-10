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

export const uncomplete = createAction(
  '[Todo] Uncomplete',
  props<{ id: number }>()
);

export const destroy = createAction('[Todo] Destroy', props<{ id: number }>());
