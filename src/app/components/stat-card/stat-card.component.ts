import { Component, Input } from '@angular/core';
import { userInfo } from '../user-stats/user-stats.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  constructor (private router: Router){}
  @Input() cardData: userInfo = {
    statCount:0,
    statName:"",
    statUrl:"",
    icon:""
  };
  @Input() userName:string = ""; 
  navigateTo(name:string): void {
    if(name === 'Repos'){
      this.router.navigate(['/repos'], {
        queryParams: {
          user: this.userName
        }
      });
    }
  }
}
