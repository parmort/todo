import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  editForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({ name: '' });
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.todoService
        .getTodo(id)
        .subscribe((t: Todo) => this.editForm.controls.name.setValue(t.name));
    });
  }

  submit(): void {
    this.todoService
      .editTodo(this.id, this.editForm.value)
      .subscribe(_ => this.router.navigateByUrl(''));
  }
}
