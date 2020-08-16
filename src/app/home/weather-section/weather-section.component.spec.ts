import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSectionComponent } from './weather-section.component';

describe('WeatherSectionComponent', () => {
  let component: WeatherSectionComponent;
  let fixture: ComponentFixture<WeatherSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
