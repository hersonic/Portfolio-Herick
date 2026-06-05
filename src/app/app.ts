import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from "./header/header.js";
import { Footer } from "./footer/footer.js";
import { Home } from "./home/home.js";
import { Experiencia } from "./experiencia/experiencies.js";
import { Portfolio } from "./portfolio/portfolio.js";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, Experiencia, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('portifolio-herick');
}
