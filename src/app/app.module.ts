import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDoneComponent } from './components/task-done/task-done.component';
import { AllTasksComponent } from './components/all-tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRouts: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'new-task', component: TaskFormComponent },
  { path: 'completed', component: TaskDoneComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    TaskDoneComponent,
    AllTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouts, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
