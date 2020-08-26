import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/common/models/app-user';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //user: User;
  user$: Observable<firebase.User>;
  userId;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
    /*
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
    */
  }

  async loginWithGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    await this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/edit-profile']);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    // localStorage.removeItem('user');
    // this.router.navigate(['admin/login']);
    this.router.navigate(['']);
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) {
          this.userId = user.uid;
          return this.userService.get(user.uid).valueChanges();
        }

        return of(null);
      })
    );
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.router.navigate(['/edit-profile']);
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['/edit-profile']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
