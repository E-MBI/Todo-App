import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/t-interface';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./layout/all-tasks.component.css'],
})
export class AllTasksComponent implements OnInit {
  fatrash = faTrash;
  facheck = faCheck;

  tasks: Task[] = [];

  constructor(private taskSer: TaskService) {}

  ngOnInit(): void {
    this.taskSer.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
