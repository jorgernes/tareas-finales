import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivcontenedorComponent } from './divcontenedor.component';

describe('DivcontenedorComponent', () => {
  let component: DivcontenedorComponent;
  let fixture: ComponentFixture<DivcontenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivcontenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivcontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
