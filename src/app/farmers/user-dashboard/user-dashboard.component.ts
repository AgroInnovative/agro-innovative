import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app//common/models/app-user';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  appUser: AppUser;
  uid;

  weatherImage1 = 'assets/img/weather/weather1.JPG';
  weatherImage2 = 'assets/img/agro-dashboard/agro-dashboard1.jpg';
  dashboardImage3 = 'assets/img/agro-farm.png';
  dashboardImage4 = 'assets/img/agro-dashboard/agro-dashboard.png';

  constructor(public auth: AuthService, private userService: UserService) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
    // console.log(auth.userId);
    this.uid = auth.userId;
  }

  ngOnInit(): void {}
}
