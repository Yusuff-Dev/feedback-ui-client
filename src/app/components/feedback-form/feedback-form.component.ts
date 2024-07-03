import { Component, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RatingComponent } from '../rating/rating.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FeedbacksService } from '../../services/feedbacks.service';


@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [
    CardComponent,
    RatingComponent,
    ReactiveFormsModule
  ],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  ratings = Array.from({ length: 10 }, (_, i) => i + 1);

  feedbackForm = new FormGroup ({
    text: new FormControl(''),
    rating: new FormControl(0),
  });

  constructor(private $feedbacks: FeedbacksService) { }

  submit() {
    this.$feedbacks.addFeedback(this.feedbackForm.value).subscribe((data) => {     
      this.feedbackForm.reset();
      window.location.reload();
      alert('Feedback added successfully');
    });
  }
  
  update(feedback: any) {
    const id = (<HTMLInputElement> document.getElementById('update')).getAttribute('data-id') || ''; 
    this.$feedbacks.update(feedback, id).subscribe((data) => {
      this.feedbackForm.reset();
      window.location.reload();
      alert('Feedback updated successfully');
    });
  }
}
