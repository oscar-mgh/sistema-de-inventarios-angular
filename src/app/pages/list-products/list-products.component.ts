import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { MaterialModule } from '../../material.module';
import { DataTableComponent } from '../../components/data-table/data-table.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [MaterialModule, DataTableComponent],
  templateUrl: './list-products.component.html',
  styles: ``,
})
export class ListProductsComponent implements OnInit {
  private _products = signal<Product[]>([]);
  public products = computed<Product[]>(() => this._products());

  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService
      .getProducts()
      .subscribe((products) => this._products.set(products));
  }
}
