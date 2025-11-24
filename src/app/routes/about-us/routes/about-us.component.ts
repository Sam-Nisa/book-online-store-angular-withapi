import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutHeroSectionComponent} from '../../../components/about-hero-section/about-hero-section.component';
import {MissionValuesComponent} from '../../../components/mission-values/mission-values.component';
import {HistoryTimelineComponent} from '../../../components/history-timeline/history-timeline.component';
import {MeetTheTeamComponent} from '../../../components/meet-the-team/meet-the-team.component';
import {CtaSectionComponent} from '../../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-about-us',
  imports: [
    AboutHeroSectionComponent,
    MissionValuesComponent,
    HistoryTimelineComponent,
    MeetTheTeamComponent,
    CtaSectionComponent,
    RouterOutlet
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
