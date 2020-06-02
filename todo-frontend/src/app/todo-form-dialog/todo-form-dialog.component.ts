import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss'],
})
export class TodoFormDialogComponent implements OnInit {
  text: string;
  constructor(
    private dialogRef: MatDialogRef<TodoComponent | NavComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  ngOnInit(): void {
    this.text = this.data.name ? 'Edit Todo' : 'Create Todo';
  }

  cancel() {
    this.dialogRef.close(null);
  }

  validData() :boolean {
    return this.data.name !== '';
  }
}
