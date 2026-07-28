import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private platformId = inject(PLATFORM_ID);
  public readonly measurementId = 'G-VT3HE3NZB7';

  /**
   * Helper privado para verificar se estamos executando no navegador
   */
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Envia um evento genérico para o Google Analytics
   */
  public sendEvent(eventName: string, params: Record<string, any> = {}): void {
    if (this.isBrowser() && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  /**
   * Rastreia navegação/visualização de páginas ou seções
   */
  public trackPageView(pageTitle?: string, pagePath?: string): void {
    if (this.isBrowser() && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', this.measurementId, {
        page_title: pageTitle || (typeof document !== 'undefined' ? document.title : ''),
        page_path: pagePath || (typeof window !== 'undefined' ? window.location.pathname + window.location.hash : ''),
      });
    }
  }

  /**
   * Rastreia cliques em links de redes sociais (LinkedIn, GitHub, etc)
   */
  public trackSocialClick(platform: string, url: string): void {
    this.sendEvent('click_social', {
      event_category: 'engagement',
      social_platform: platform,
      destination_url: url,
    });
  }

  /**
   * Rastreia cliques em projetos do portfólio
   */
  public trackProjectClick(projectName: string, projectUrl: string): void {
    this.sendEvent('click_project', {
      event_category: 'portfolio',
      project_name: projectName,
      destination_url: projectUrl,
    });
  }

  /**
   * Rastreia o download/visualização do Currículo (CV)
   */
  public trackDownloadCV(): void {
    this.sendEvent('download_cv', {
      event_category: 'conversion',
      file_name: 'CV_herick.pdf',
    });
  }

  /**
   * Rastreia a alternância de tema (escuro / claro)
   */
  public trackThemeToggle(theme: 'dark' | 'light'): void {
    this.sendEvent('toggle_theme', {
      event_category: 'user_preference',
      selected_theme: theme,
    });
  }

  /**
   * Rastreia a navegação pelo menu superior
   */
  public trackNavClick(sectionName: string): void {
    this.sendEvent('nav_click', {
      event_category: 'navigation',
      section_name: sectionName,
    });
  }

  /**
   * Rastreia o clique nos links de contato (e-mail, etc)
   */
  public trackContactClick(contactType: string, targetValue: string): void {
    this.sendEvent('click_contact', {
      event_category: 'contact',
      contact_type: contactType,
      target_value: targetValue,
    });
  }
}
