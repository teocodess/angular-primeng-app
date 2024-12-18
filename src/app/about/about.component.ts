import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule],
  template: `
    <p-card title="About Us" subTitle="Who we are">
      <ng-template pTemplate="header">
        <img src="https://picsum.photos/200/300" alt="About Us" />
      </ng-template>
      <p>We are committed to delivering the best services and products to our customers.</p>
    </p-card>
  `,
})
export class AboutComponent {}


