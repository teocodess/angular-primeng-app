import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  template: `
    <div class="contact-form">
      <h2>Contact Me</h2>
      <input pInputText placeholder="Your Name" />
      <input pInputText placeholder="Your Email" />
      <textarea pInputTextarea placeholder="Your Message"></textarea>
      <button pButton label="Send Message" class="p-button-success"></button>
    </div>
  `,
  styles: [`
    .contact-form {
      width: 50%;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    textarea {
      resize: none;
      height: 100px;
    }
  `],
})
export class ContactComponent {}
