import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AppUser } from 'src/app/common/models/app-user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navBarLogo = 'assets/img/main_logo_PNG.png';
  appUser: AppUser;

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
