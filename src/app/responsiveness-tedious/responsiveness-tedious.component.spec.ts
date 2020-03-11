import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessTediousComponent } from './responsiveness-tedious.component';

describe('ResponsivenessExampleComponent', () => {
  let component: ResponsivenessTediousComponent;
  let fixture: ComponentFixture<ResponsivenessTediousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessTediousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessTediousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
