import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  constructor (private router: Router,){};

  hint: string = "Enter to Search Profile";
  placeholder: string = "Github Profile";
  label: string = "Profile";
  icon: string = "search";

  searchHandler (value:Event) {
    this.router.navigate(['profile'], {
      queryParams: {
        user: value
      }
    });
  }
} 
