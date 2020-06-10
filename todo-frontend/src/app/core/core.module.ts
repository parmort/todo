import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './todo/todo.service';

// prettier-ignore
@NgModule({
  imports: [CommonModule],
  providers: [ TodoService ]
})
export class CoreModule {}
