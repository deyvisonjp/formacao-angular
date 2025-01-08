import { HomeComponent } from './page/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  // {
  //   path: 'second-component', component: SecondComponent
  // },
  // {
  //   path: '**', component: PageNotFoundComponent
  // },
];
