import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Feedback } from '../../models/feedback.model';
import { FeedbacksService } from '../../services/feedbacks.service';


@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [CardComponent,],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent {
  feedbacks: Feedback[] = [];

  constructor(private $feedbacks: FeedbacksService) { }

  ngOnInit() {
    this.$feedbacks.getFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
    // this.deleteFeedback(this.feedbacks);
  }

  public deleteFeedback(feedback: any) {
    this.$feedbacks.deleteFeedback(feedback._id).subscribe((data) => {
      window.confirm('Are you sure you want to delete this feedback?');
      window.location.reload()
    });
  }

  editFeedback(feedback: any) {
    (<HTMLInputElement>document.getElementById('text')).value = feedback.text;
    (<HTMLInputElement>document.getElementById('rating-' + feedback.rating)).checked = true;
    (<HTMLInputElement>document.getElementById('add')).style.display = 'none';
    const updateBtn = (<HTMLInputElement>document.getElementById('update'));
    updateBtn.style.display = 'flex';
    updateBtn.setAttribute('data-id', feedback._id);
  }
}
