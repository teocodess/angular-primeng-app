import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/products">Products</a>
      <a routerLink="/contact">Contact</a>
      <a routerLink="/button">Tests</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 1rem 0;
    }
    nav a {
      text-decoration: none;
      color: black;
    }
  `],
})
export class AppComponent {}
