import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page: string = 'allTasks';

  constructor() {}

  onSelectPage(selectedPage: string) {
    this.page = selectedPage;
  }

  onAddTask(selectedPage: string) {
    this.page = selectedPage;
  }
}
