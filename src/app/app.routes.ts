import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Products } from './pages/products/products';
import { Search } from './pages/search/search';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Productos',
        component: Products
      },
      {
        path: 'search',
        title: 'Buscar',
        component: Search
      }
    ]
  }
];
