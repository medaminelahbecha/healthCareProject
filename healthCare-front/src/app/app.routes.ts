import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'; // Adjusted path based on common Angular project structure

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // If you have a home component or another default landing page, you can add it here.
  // For example:
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }

  // If login should be the default page for now:
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
