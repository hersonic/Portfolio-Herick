import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.js';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.js';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});