import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  constructor(private db: AngularFireDatabase) {}

  getDistricts() {
    // console.log(this.db.list('/districts-in-srilanka'));
    return this.db.list('/districts-in-srilanka').snapshotChanges();
  }
}
