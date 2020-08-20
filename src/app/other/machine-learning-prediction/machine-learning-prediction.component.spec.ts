import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningPredictionComponent } from './machine-learning-prediction.component';

describe('MachineLearningPredictionComponent', () => {
  let component: MachineLearningPredictionComponent;
  let fixture: ComponentFixture<MachineLearningPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineLearningPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
