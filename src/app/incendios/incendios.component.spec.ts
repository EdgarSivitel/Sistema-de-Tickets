import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncendiosComponent } from './incendios.component';

describe('IncendiosComponent', () => {
  let component: IncendiosComponent;
  let fixture: ComponentFixture<IncendiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncendiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncendiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
