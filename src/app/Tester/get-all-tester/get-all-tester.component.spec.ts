import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTesterComponent } from './get-all-tester.component';

describe('GetAllTesterComponent', () => {
  let component: GetAllTesterComponent;
  let fixture: ComponentFixture<GetAllTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
