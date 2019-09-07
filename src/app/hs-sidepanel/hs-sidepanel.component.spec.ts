import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSidepanelComponent } from './hs-sidepanel.component';

describe('HsSidepanelComponent', () => {
  let component: HsSidepanelComponent;
  let fixture: ComponentFixture<HsSidepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsSidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
