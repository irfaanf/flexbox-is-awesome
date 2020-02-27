import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryCSSComponent } from './ordinary-css.component';

describe('OrdinaryCSSComponent', () => {
  let component: OrdinaryCSSComponent;
  let fixture: ComponentFixture<OrdinaryCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
