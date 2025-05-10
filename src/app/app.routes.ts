import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyAssetsFormComponent } from './buy-assets-form/buy-assets-form.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'buyForm',
    component: BuyAssetsFormComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
