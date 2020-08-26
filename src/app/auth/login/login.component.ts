import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'farmers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService) {}
  login() {
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
