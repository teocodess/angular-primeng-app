import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section>
      <h1>Welcome to My App</h1>
      <p>Your journey starts here.</p>
      <button pButton label="Get Started" class="p-button-raised p-button-rounded p-button-warning"></button>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      margin: 2rem 0;
    }
  `]
})
export class HomeComponent {}
