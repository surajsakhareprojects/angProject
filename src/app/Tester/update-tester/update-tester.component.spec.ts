import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTesterComponent } from './update-tester.component';

describe('UpdateTesterComponent', () => {
  let component: UpdateTesterComponent;
  let fixture: ComponentFixture<UpdateTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
