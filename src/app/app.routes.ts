import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
  },
  {
    path:'stats',
    loadComponent: () => import('./stats/stats.component'),
  },
  {
    path: '',
    redirectTo : '/login',
    pathMatch: 'full'
  },




];
