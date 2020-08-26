import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private db: AngularFireDatabase) {}

  getCities() {
    return this.db.list('/cities-in-srilanka').snapshotChanges();
  }
}
