import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GithubService } from 'src/app/services/github.service';

export interface repoInfo {
  name: string,
  fullName: string,
  description: string | null,
  topics: string[],
  viewUrl: string
}

@Component({
  selector: 'app-repository-list-page',
  templateUrl: './repository-list-page.component.html',
  styleUrls: ['./repository-list-page.component.scss']
})

export class RepositoryListPageComponent implements OnInit {
  constructor(private githubService: GithubService) { }
  repositryList: repoInfo[] = [];
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  length = 100;
  page = 1;
  dataList: repoInfo[] = []
  isLoading: boolean = true;
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    this.isLoading = true;
    // Get the value of the 'user' parameter
    const user = urlParams.get('user');
    this.githubService.getRepositories(user ?? "").subscribe((list) => {
      // Handle successful response
      this.length = list.length;
      this.repositryList = this.configureRepoListData(list);
      this.dataList = this.repositryList.slice(this.page - 1, this.pageSize);
      this.isLoading = false;
    },
      (error) => {
        // Handle error
        console.error('Error fetching repositry data:', error);
      })
  }
  configureRepoListData(list: any): repoInfo[] {
    return list.map((repo: any) => {
      const repoData: repoInfo = {
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        topics: repo.topics,
        viewUrl: repo.html_url
      }
      return repoData;
    })
  }
  handleChange(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.page = e.pageIndex;
    this.dataList = this.repositryList.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
  }
}
