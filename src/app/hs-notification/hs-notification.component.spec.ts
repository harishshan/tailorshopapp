import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsNotificationComponent } from './hs-notification.component';

describe('HsNotificationComponent', () => {
  let component: HsNotificationComponent;
  let fixture: ComponentFixture<HsNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
