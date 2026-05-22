import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-logos-tech',
  imports: [],
  templateUrl: './logos-tech.html',
  styleUrl: './logos-tech.css',
})
export class LogosTech {
  @Input() nome: 'js' | 'html' | 'css' | 'react' | 'angular' | string = ''; 
}
