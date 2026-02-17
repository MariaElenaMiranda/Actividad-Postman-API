import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Productos',
        component: Products
      }
    ]
  }
];
