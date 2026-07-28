import { Component, inject } from '@angular/core';
import { ThemeToggleComponents } from '../theme-toggle/theme-toggle.js';
import { AnalyticsService } from '../services/analytics.service.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponents],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  private analyticsService = inject(AnalyticsService);
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onNavClick(sectionName: string) {
    this.analyticsService.trackNavClick(sectionName);
    this.menuOpen = false;
  }
}

