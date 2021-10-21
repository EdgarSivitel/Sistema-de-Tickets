import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaCorreoComponent } from './plantilla-correo.component';

describe('PlantillaCorreoComponent', () => {
  let component: PlantillaCorreoComponent;
  let fixture: ComponentFixture<PlantillaCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
