import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessFlexboxExampleComponent } from './responsiveness-flexbox-example.component';

describe('ResponsivenessFlexboxExampleComponent', () => {
  let component: ResponsivenessFlexboxExampleComponent;
  let fixture: ComponentFixture<ResponsivenessFlexboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessFlexboxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessFlexboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
