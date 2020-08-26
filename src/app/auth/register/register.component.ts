import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}
}
