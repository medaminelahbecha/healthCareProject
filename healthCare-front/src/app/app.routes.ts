import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home'; // 1. Import HomeComponent
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  // 4. Login route (verified as correct)
  { path: 'login', component: LoginComponent },

  // New Signup route
  { path: 'signup', component: SignupComponent },

  // 3. Define Home Route
  { path: 'home', component: HomeComponent },

  // 2. Set Default Route to Home
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // Old redirect to login is now replaced by redirect to home
];

// 5. Clean up old/unused imports - None were present from old app/login path.
