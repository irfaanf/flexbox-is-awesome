import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentExampleComponent } from './alignment-example.component';

describe('OrdinaryCSSComponent', () => {
  let component: AlignmentExampleComponent;
  let fixture: ComponentFixture<AlignmentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignmentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignmentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
