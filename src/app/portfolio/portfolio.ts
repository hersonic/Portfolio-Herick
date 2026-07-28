import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service.js';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private analyticsService = inject(AnalyticsService);

  trackProject(projectName: string, projectUrl: string) {
    this.analyticsService.trackProjectClick(projectName, projectUrl);
  }
}

