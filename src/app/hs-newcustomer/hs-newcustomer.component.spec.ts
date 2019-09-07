import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsNewcustomerComponent } from './hs-newcustomer.component';

describe('HsNewcustomerComponent', () => {
  let component: HsNewcustomerComponent;
  let fixture: ComponentFixture<HsNewcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsNewcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsNewcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
