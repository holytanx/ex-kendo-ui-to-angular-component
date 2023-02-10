import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTreeviewComponent } from './ta-treeview.component';

describe('TaTreeviewComponent', () => {
  let component: TaTreeviewComponent;
  let fixture: ComponentFixture<TaTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
