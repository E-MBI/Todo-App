import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./layout/header.component.css'],
})
export class HeaderComponent {
  @Output() selectPage = new EventEmitter<any>();
  constructor() {}

  onSelectPage(page: string) {
    this.selectPage.emit(page);
  }
}
