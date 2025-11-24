
import { Component } from '@angular/core';
import { feedbacks } from '../../constants/feedback';
import {Feedback} from '../../types/feedback.model';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-feedback-reader',
  imports: [NgFor],
  templateUrl: './feedback-reader.component.html',
  styleUrl: './feedback-reader.component.scss',
  standalone: true, // required for imports
})
export class FeedbackReaderComponent {
  feedbacks: Feedback[] = feedbacks;
}


