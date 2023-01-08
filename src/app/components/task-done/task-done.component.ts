import { Component } from '@angular/core';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./layout/task-done.component.css'],
})
export class TaskDoneComponent {
  //replace this obj form api
  task: any = {
    status: true,
  };

  fatrash = faTrash;
  facheck = faCheck;

  constructor() {}
}
