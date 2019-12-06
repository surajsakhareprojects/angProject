import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagerComponent } from './get-manager.component';

describe('GetManagerComponent', () => {
  let component: GetManagerComponent;
  let fixture: ComponentFixture<GetManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
