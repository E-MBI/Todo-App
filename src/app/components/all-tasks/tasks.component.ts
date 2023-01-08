import { Component, EventEmitter, Output } from '@angular/core';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./layout/all-tasks.component.css'],
})
export class AllTasksComponent {
  @Output() addNewTask = new EventEmitter<any>();
  //replace this obj form api
  task: any = {
    status: true,
  };

  fatrash = faTrash;
  facheck = faCheck;

  constructor() {}

  onAddTask(addNewTask: string) {
    this.addNewTask.emit(addNewTask);
    console.log(addNewTask);
  }
}
