// src/app/pages/meet-the-team/meet-the-team.component.ts
import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../constants/team';
import  {TeamMember} from '../../types/team.model';
import {NgFor} from '@angular/common';

@Component({
  imports:[NgFor],
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.scss'],
  standalone: true
})
export class MeetTheTeamComponent {
  team: TeamMember[] = TEAM_MEMBERS; // ✅ Use data from external file
}
