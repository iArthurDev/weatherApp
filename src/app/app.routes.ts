import { Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent },
];
