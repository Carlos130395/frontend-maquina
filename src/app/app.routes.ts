import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'maquina',
    loadComponent: () => import('./application/components/maquina/maquina.component').then((m) => m.default)
  },
  {
    path: '',
    redirectTo: 'maquina',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
