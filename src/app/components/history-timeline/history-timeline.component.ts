import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {TIMELINE_EVENTS } from '../../constants/timeline';
import {TimelineEvent} from '../../types/timeline.model';

@Component({
  selector: 'app-history-timeline',
  templateUrl: './history-timeline.component.html',
  styleUrls: ['./history-timeline.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class HistoryTimelineComponent {
  sectionTitle = 'Our History';
  timeline: TimelineEvent[] = TIMELINE_EVENTS;
}
