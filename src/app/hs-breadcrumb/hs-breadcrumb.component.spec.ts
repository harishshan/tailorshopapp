import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsBreadcrumbComponent } from './hs-breadcrumb.component';

describe('HsBreadcrumbComponent', () => {
  let component: HsBreadcrumbComponent;
  let fixture: ComponentFixture<HsBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
