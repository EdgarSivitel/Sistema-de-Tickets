import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSoporteComponent } from './menu-soporte.component';

describe('MenuSoporteComponent', () => {
  let component: MenuSoporteComponent;
  let fixture: ComponentFixture<MenuSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
