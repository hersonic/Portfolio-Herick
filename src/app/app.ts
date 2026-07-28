import { Component, OnInit, AfterViewInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.js";
import { Footer } from "./footer/footer.js";
import { Home } from "./home/home.js";
import { Experiencia } from "./experiencia/experiencies.js";
import { Portfolio } from "./portfolio/portfolio.js";
import { AnalyticsService } from './services/analytics.service.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, Experiencia, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('portifolio-herick');
  private analyticsService = inject(AnalyticsService);
  private platformId = inject(PLATFORM_ID);
  private observedSections = new Set<string>();

  ngOnInit(): void {
    // Envia o page view inicial
    this.analyticsService.trackPageView('Herick Bomtorin - Portfólio', '/');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      const sectionIds = ['home', 'experiencia', 'portfolio', 'contato'];
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            const sectionId = entry.target.id;
            if (!this.observedSections.has(sectionId)) {
              this.observedSections.add(sectionId);
              this.analyticsService.sendEvent('section_view', {
                event_category: 'scroll_engagement',
                section_name: sectionId,
              });
            }
          }
        });
      }, { threshold: 0.3 });

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }
  }
}

