import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosTech } from '../logos-tech/logos-tech.js';
import { AnalyticsService } from '../services/analytics.service.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LogosTech
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home { 
  private analyticsService = inject(AnalyticsService);

  trackSocial(platform: string, url: string) {
    this.analyticsService.trackSocialClick(platform, url);
  }

  trackDownloadCV() {
    this.analyticsService.trackDownloadCV();
  }
}

