import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoComponent,
    EditTodoComponent,
    CreateTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
