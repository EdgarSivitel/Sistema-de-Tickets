import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarReporteComponent } from './agregar-reporte.component';

describe('AgregarReporteComponent', () => {
  let component: AgregarReporteComponent;
  let fixture: ComponentFixture<AgregarReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
