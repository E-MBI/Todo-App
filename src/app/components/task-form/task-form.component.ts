import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./layout/task-form.component.css'],
})
export class TaskFormComponent {
  constructor() {}

  onSubmit(e: Event) {
    e.preventDefault();
  }
}
