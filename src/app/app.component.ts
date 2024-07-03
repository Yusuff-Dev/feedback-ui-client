import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackStatsComponent } from './components/feedback-stats/feedback-stats.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    FeedbackFormComponent, 
    FeedbackStatsComponent,
    FeedbackListComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
