import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CropsService {
  constructor(private db: AngularFireDatabase) {}

  getCrops() {
    // console.log(this.db.list('/districts-in-srilanka'));
    return this.db.list('/crops-cultivated/rice').snapshotChanges();
  }
}
