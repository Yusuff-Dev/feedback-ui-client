import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  ratings = Array.from({ length: 10 }, (_, i) => i + 1);

  @Output() ratingChange = new EventEmitter<number>();

  onRatingChange(rating: number) {
    this.ratingChange.emit(rating);
  }
}
