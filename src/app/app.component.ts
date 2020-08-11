import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AgroInnovative';

  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        console.log(user);
        console.log(returnUrl);
        //this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
