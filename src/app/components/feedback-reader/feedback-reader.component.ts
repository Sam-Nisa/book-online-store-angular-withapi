import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { feedbacks } from '../../constants/feedback';
import { Feedback } from '../../types/feedback.model';

@Component({
  selector: 'app-feedback-reader',
  standalone: true,
  imports: [NgFor],
  templateUrl: './feedback-reader.component.html',
  styleUrls: ['./feedback-reader.component.scss'],
})
export class FeedbackReaderComponent {
  feedbacks: Feedback[] = feedbacks;
}
