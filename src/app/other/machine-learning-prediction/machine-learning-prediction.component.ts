import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AppUser } from 'src/app/common/models/app-user';

@Component({
  selector: 'machine-learning-prediction',
  templateUrl: './machine-learning-prediction.component.html',
  styleUrls: ['./machine-learning-prediction.component.css'],
})
export class MachineLearningPredictionComponent implements OnInit {
  appUser: AppUser;
  uid;
  isGeneratingMLPrediction;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
    // console.log(auth.userId);
    this.uid = this.auth.userId;
  }

  generatePredictions() {
    this.isGeneratingMLPrediction = true;
    window.location.href =
      'https://elzianagro.herokuapp.com/pestPrediction/' + this.uid;
    event.preventDefault();
  }
}
