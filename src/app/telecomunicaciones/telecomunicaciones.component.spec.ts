import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomunicacionesComponent } from './telecomunicaciones.component';

describe('TelecomunicacionesComponent', () => {
  let component: TelecomunicacionesComponent;
  let fixture: ComponentFixture<TelecomunicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelecomunicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomunicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
