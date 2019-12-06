import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateCeoComponent } from './upadate-ceo.component';

describe('UpadateCeoComponent', () => {
  let component: UpadateCeoComponent;
  let fixture: ComponentFixture<UpadateCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadateCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadateCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
