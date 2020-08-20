import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AppUser } from 'src/app/common/models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  city = 'colombo'; //default

  constructor(private db: AngularFireDatabase) {}

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    //to get current user
    return this.db.object('/users/' + uid);
  }

  getAll() {
    return this.db.list('/users').snapshotChanges();
  }

  getUser(userId) {
    return this.db.object('/users/' + userId).valueChanges();
  }

  update(userId, user) {
    console.log(user.city);
    this.city = user.city;
    return this.db.object('/users/' + userId).update(user);
  }

  updateWeather(userId, weather) {
    return this.db.object('/users/' + userId).update(weather);
  }
}
