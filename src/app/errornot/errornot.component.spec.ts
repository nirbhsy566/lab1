import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrornotComponent } from './errornot.component';

describe('ErrornotComponent', () => {
  let component: ErrornotComponent;
  let fixture: ComponentFixture<ErrornotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrornotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrornotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
