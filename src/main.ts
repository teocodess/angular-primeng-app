import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProductsComponent } from './app/products/products.component';
import { ContactComponent } from './app/contact/contact.component';
import { ButtonExampleComponent } from './app/button-example/button-example.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'contact', component: ContactComponent },
      {path: 'button', component: ButtonExampleComponent}
    ]),
  ],
}).catch(err => console.error(err));
