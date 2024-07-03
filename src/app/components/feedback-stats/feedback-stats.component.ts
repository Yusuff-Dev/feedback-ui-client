import { Component } from '@angular/core';
import { Feedback } from '../../models/feedback.model';
import { FeedbacksService } from '../../services/feedbacks.service';

@Component({
  selector: 'app-feedback-stats',
  standalone: true,
  imports: [],
  templateUrl: './feedback-stats.component.html',
  styleUrl: './feedback-stats.component.css'
})
export class FeedbackStatsComponent {
  feedbacks: Feedback[] = [];
  avarageRating: number = 0;

  constructor(private $feedbacks: FeedbacksService) { }

  ngOnInit() {
    this.$feedbacks.getFeedbacks().subscribe((data) => {
      this.feedbacks = data;
      this.avarageRating = this.feedbacks.reduce((acc, cur) => {
        return acc += cur.rating;
      }, 0) / this.feedbacks.length;  
    });   
  }
}
