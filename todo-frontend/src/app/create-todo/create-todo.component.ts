import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({ name: '' });
  }

  submit(): void {
    this.todoService
      .createTodo(this.createForm.value)
      .subscribe(_ => this.router.navigateByUrl(''));
  }
}
