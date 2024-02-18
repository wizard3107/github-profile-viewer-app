import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { GitHubUser } from '../interface';
import { userInfo } from '../user-stats/user-stats.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  constructor(private githubService: GithubService, private router: Router) { }
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the 'user' parameter
    const user = urlParams.get('user');
    this.getUserDetails(user ?? "");
  }
  isLoading: boolean = true;
  userDetails:GitHubUser = {
    avatar_url: "",
    bio: "",
    blog: "",
    company: null,
    created_at: "",
    email: null,
    events_url: "https://api.github.com/users/{username}/events{/privacy}",
    followers: 0,
    followers_url: "https://api.github.com/users/{username}/followers",
    following: 0,
    following_url: "https://api.github.com/users/{username}/following{/other_user}",
    gists_url: "https://api.github.com/users/{username}/gists{/gist_id}",
    gravatar_id: "",
    hireable: true,
    html_url: "https://github.com/{username}",
    id: 2056111,
    location: "/etc",
    login: "",
    name: "",
    node_id: "MDQ6VXNlcjIwNTYxMTE=",
    organizations_url: "https://api.github.com/users/{username}/orgs",
    public_gists: 0,
    public_repos: 6,
    received_events_url: "https://api.github.com/users/{username}/received_events",
    repos_url: "https://api.github.com/users/{username}/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/{username}/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/{username}/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "",
    url: ""
  }
  userStats: userInfo[] = [];
  getUserDetails(user:string){
    this.githubService.getUser(user).subscribe((user) => {
      // Handle successful response 
      this.userDetails = user;
      this.userStats = [
        {
          statCount: this.userDetails.followers,
          statUrl: this.userDetails.followers_url,
          statName: "followers",
          icon:"../../../assets/follower.svg"
        },
        {
          statCount: this.userDetails.following,
          statUrl: this.userDetails.following_url,
          statName: "following",
          icon:"../../../assets/follower.svg"
        },
        {
          statCount: this.userDetails.public_repos,
          statUrl: this.userDetails.repos_url,
          statName: "Repos",
          icon:"../../../assets/repoIcon.svg"
        }
      ];
      this.isLoading = false;
    },
    (error) => {
      // Handle error
      this.router.navigate(['error'])
      console.error('Error fetching user data:', error);
    }) 
  }
} 
