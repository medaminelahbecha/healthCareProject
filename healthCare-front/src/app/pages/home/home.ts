import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Add HeaderComponent to imports
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
