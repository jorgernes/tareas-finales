import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Div6Component } from './div6.component';

describe('Div6Component', () => {
  let component: Div6Component;
  let fixture: ComponentFixture<Div6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Div6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Div6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
