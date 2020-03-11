import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessFlexboxComponent } from './responsiveness-flexbox.component';

describe('ResponsivenessFlexboxExampleComponent', () => {
  let component: ResponsivenessFlexboxComponent;
  let fixture: ComponentFixture<ResponsivenessFlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessFlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
