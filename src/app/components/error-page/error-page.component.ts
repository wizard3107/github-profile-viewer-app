import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorComponent {
  @Input() isApiError?: boolean;

  constructor(private router: Router) { }

  handleBackButton(): void {
    if (this.isApiError) {
    }
    this.router.navigate(['/']);
  }
}
