import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Div5Component } from './div5.component';

describe('Div5Component', () => {
  let component: Div5Component;
  let fixture: ComponentFixture<Div5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Div5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Div5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
