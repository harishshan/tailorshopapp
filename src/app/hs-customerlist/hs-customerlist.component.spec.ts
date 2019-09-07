import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsCustomerlistComponent } from './hs-customerlist.component';

describe('HsCustomerlistComponent', () => {
  let component: HsCustomerlistComponent;
  let fixture: ComponentFixture<HsCustomerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsCustomerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsCustomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
