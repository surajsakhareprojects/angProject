import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailTesterComponent } from './get-detail-tester.component';

describe('GetDetailTesterComponent', () => {
  let component: GetDetailTesterComponent;
  let fixture: ComponentFixture<GetDetailTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDetailTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
