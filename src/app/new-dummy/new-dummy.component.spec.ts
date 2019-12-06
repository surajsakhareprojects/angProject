import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDummyComponent } from './new-dummy.component';
import { Title } from '@angular/platform-browser';

describe('NewDummyComponent', () => {
  let component: NewDummyComponent;
  let fixture: ComponentFixture<NewDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('title should be Pranita', () => {
    expect(Title).toEqual('Pranita');
  });
});
