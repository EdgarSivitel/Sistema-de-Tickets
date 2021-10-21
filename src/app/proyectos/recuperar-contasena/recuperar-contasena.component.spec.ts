import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContasenaComponent } from './recuperar-contasena.component';

describe('RecuperarContasenaComponent', () => {
  let component: RecuperarContasenaComponent;
  let fixture: ComponentFixture<RecuperarContasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarContasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarContasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
