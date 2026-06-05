import { Component } from '@angular/core';
import { ThemeToggleComponents } from '../theme-toggle/theme-toggle.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponents],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
