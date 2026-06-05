import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.css'],
})
export class ThemeToggleComponents implements OnInit {
  ngOnInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Default to dark theme if preferred by system, or if it matches the portfolio's original style
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
      } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
      }
    }
  }

  toggleTheme() {
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }
}
