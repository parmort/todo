import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer as todoReducer } from './core/todo/todo.reducer';
import { TodoEffects } from './core/todo/todo.effects';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormDialogComponent } from './todo-form-dialog/todo-form-dialog.component';
import { NavComponent } from './nav/nav.component';

const matImports = [
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoComponent,
    TodoFormDialogComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    ...matImports,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
