import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Home } from "./home/home";
import { Experiencia } from "./experiencia/experiencies";
import { Portfolio } from "./portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Experiencia, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio-herick');
}
