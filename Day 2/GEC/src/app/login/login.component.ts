import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  pass = '';

  
  savedEmail = 'task@gmail.com';
  savedPassword = '123';

  showValue() {
    if (this.username === this.savedEmail && this.pass === this.savedPassword) {
      console.log('Login successful!');
    } else {
      console.log('Invalid email or password.');
    }
  }
}

