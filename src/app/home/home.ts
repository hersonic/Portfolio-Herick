import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogosTech } from '../logos-tech/logos-tech.js';
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
  
}
