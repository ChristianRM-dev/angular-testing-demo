import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Output() ratingChange = new EventEmitter<number>();
  stars = Array(5).fill(0);
  rating = 0;

  selectRating(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }
}
