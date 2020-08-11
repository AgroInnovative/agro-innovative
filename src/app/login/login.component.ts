import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'farmers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  async login() {
    // this.afAuth.auth.createUserWithEmailAndPassword
    await this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
