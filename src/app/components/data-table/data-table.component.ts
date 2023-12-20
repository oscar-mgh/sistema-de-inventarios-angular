import { Component, Input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  selector: 'shared-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  displayedColumns: string[] = ['id', 'description', 'price', 'stock'];
  private router = inject(Router);

  @Input({ required: true }) dataSource: Product[] = [];

  editElement(id: string) {
    this.router.navigate(['/editar/', id]);
  }
}
