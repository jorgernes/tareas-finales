import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFooterComponent } from './div-footer.component';

describe('DivFooterComponent', () => {
  let component: DivFooterComponent;
  let fixture: ComponentFixture<DivFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
