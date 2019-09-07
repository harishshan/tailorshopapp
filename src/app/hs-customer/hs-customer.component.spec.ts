import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsCustomerComponent } from './hs-customer.component';

describe('HsCustomerComponent', () => {
  let component: HsCustomerComponent;
  let fixture: ComponentFixture<HsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
