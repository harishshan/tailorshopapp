import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsNavbarComponent } from './hs-navbar.component';

describe('HsNavbarComponent', () => {
  let component: HsNavbarComponent;
  let fixture: ComponentFixture<HsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
