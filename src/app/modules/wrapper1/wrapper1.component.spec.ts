import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrapper1Component } from './wrapper1.component';

describe('Wrapper1Component', () => {
  let component: Wrapper1Component;
  let fixture: ComponentFixture<Wrapper1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wrapper1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
