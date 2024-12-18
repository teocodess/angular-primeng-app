import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-button-example',
  standalone: true,
  imports: [CardModule],
  template: `
    <p-card title="Card Title" subTitle="Card Subtitle">
      <p>Content of the card goes here.</p>
    </p-card>
  `,
})
export class ButtonExampleComponent {}

