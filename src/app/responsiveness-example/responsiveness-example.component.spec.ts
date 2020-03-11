import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessExampleComponent } from './responsiveness-example.component';

describe('ResponsivenessExampleComponent', () => {
  let component: ResponsivenessExampleComponent;
  let fixture: ComponentFixture<ResponsivenessExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
