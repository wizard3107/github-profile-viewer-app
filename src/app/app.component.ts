import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){};
  title = 'github-profile-viewer';
  showGoBack = false;
  handleGoTOSearch(){
    this.router.navigate([''])
  }
}
