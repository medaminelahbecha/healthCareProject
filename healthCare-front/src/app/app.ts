import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { HeaderComponent } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'healthCare-front';
}
