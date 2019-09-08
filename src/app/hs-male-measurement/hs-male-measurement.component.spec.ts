import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsMaleMeasurementComponent } from './hs-male-measurement.component';

describe('HsMaleMeasurementComponent', () => {
  let component: HsMaleMeasurementComponent;
  let fixture: ComponentFixture<HsMaleMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsMaleMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsMaleMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
