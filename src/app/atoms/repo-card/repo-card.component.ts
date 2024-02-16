import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { repoInfo } from 'src/app/components/repository-list-page/repository-list-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, CommonModule],
})

export class RepoCardComponent {
  @Input() repo: repoInfo = {
    name: "",
    fullName: "",
    description: "",
    topics: [],
    viewUrl: ""
  }
}
