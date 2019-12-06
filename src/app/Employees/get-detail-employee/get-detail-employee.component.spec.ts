import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailEmployeeComponent } from './get-detail-employee.component';

describe('GetDetailEmployeeComponent', () => {
  let component: GetDetailEmployeeComponent;
  let fixture: ComponentFixture<GetDetailEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDetailEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
