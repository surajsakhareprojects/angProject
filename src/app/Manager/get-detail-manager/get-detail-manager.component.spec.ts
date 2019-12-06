import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailManagerComponent } from './get-detail-manager.component';

describe('GetDetailManagerComponent', () => {
  let component: GetDetailManagerComponent;
  let fixture: ComponentFixture<GetDetailManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDetailManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
