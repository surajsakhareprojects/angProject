import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTesterComponent } from './create-tester.component';

describe('CreateTesterComponent', () => {
  let component: CreateTesterComponent;
  let fixture: ComponentFixture<CreateTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
