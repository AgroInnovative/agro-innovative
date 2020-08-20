import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AppUser } from 'src/app/common/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { take } from 'rxjs/operators';
import { DistrictService } from './district.service';
import { CropsService } from './crops.service';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css'],
})
export class UserDetailsFormComponent implements OnInit {
  appUser: AppUser;
  districts$;
  crops$;
  //user = {}; //Use this to work add new user properly.
  user; //Use this while developing to remove some errors
  uid;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private districtService: DistrictService,
    private cropsService: CropsService
  ) {
    auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
    // console.log(auth.userId);
    this.uid = auth.userId;
    //this.uid = this.route.snapshot.paramMap.get('id');

    this.districts$ = districtService.getDistricts();
    this.crops$ = cropsService.getCrops();

    if (this.uid) {
      this.userService
        .getUser(this.uid)
        .pipe(take(1)) //Then no need to unsubscribe
        .subscribe((u) => (this.user = u));

      console.log(this.user);
    }
  }

  async save(user) {
    if (this.uid) await this.userService.update(this.uid, user);
    else alert('User not found');
    //console.log(user);
    this.router.navigate(['/dashboard']).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {}
}
