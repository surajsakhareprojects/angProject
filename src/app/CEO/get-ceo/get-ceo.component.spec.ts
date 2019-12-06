import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCeoComponent } from './get-ceo.component';

describe('GetCeoComponent', () => {
  let component: GetCeoComponent;
  let fixture: ComponentFixture<GetCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
