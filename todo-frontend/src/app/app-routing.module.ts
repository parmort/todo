import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreateTodoComponent },
  {
    path: ':id/edit',
    component: EditTodoComponent,
  },
  { path: ':id', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
