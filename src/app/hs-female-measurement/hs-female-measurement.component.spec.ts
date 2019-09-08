import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsFemaleMeasurementComponent } from './hs-female-measurement.component';

describe('HsFemaleMeasurementComponent', () => {
  let component: HsFemaleMeasurementComponent;
  let fixture: ComponentFixture<HsFemaleMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsFemaleMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsFemaleMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
