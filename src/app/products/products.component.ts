import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TableModule],
  template: `
    <p-table [value]="products">
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [`
    p-table {
      width: 80%;
      margin: 2rem auto;
    }
  `],
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', price: '$10', category: 'Category A' },
    { name: 'Product 2', price: '$20', category: 'Category B' },
    { name: 'Product 3', price: '$30', category: 'Category C' },
  ];
}
