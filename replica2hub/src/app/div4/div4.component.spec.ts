import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Div4Component } from './div4.component';

describe('Div4Component', () => {
  let component: Div4Component;
  let fixture: ComponentFixture<Div4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Div4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Div4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
