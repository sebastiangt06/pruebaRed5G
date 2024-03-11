import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  LoginComponent  from './login/login.component';
import StatsComponent from './stats/stats.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, LoginComponent,StatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'pruebared5g';
}
