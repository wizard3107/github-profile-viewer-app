import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubUser } from '../interface';

export interface userInfo {
  statName: string,
  statCount: number,
  statUrl: string,
  icon:string
}
@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})


export class UserStatsComponent {
  
  @Input() userStats: userInfo[] = [];
  @Input() userName: string = "";
}
