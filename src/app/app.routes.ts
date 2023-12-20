import { Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ListProductsComponent,
  },
  {
    path: 'agregar',
    component: AddProductComponent,
  },
  {
    path: 'editar/:id',
    component: EditProductComponent,
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
