import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header'; // Import HeaderComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent], // Add HeaderComponent to imports
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
