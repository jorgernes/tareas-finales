import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivPatrocinioComponent } from './div-patrocinio.component';

describe('DivPatrocinioComponent', () => {
  let component: DivPatrocinioComponent;
  let fixture: ComponentFixture<DivPatrocinioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivPatrocinioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivPatrocinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
