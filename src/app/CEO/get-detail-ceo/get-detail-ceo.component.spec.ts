import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailCeoComponent } from './get-detail-ceo.component';

describe('GetDetailCeoComponent', () => {
  let component: GetDetailCeoComponent;
  let fixture: ComponentFixture<GetDetailCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDetailCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
