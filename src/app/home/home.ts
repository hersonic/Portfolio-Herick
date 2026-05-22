import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LogosTech } from '../logos-tech/logos-tech';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    LogosTech,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home { 
  
 }
