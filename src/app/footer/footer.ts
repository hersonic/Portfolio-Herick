import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service.js';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private analyticsService = inject(AnalyticsService);

  trackEmailClick(email: string) {
    this.analyticsService.trackContactClick('email', email);
  }
}

