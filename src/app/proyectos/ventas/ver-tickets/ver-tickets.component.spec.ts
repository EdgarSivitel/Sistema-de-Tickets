import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTicketsComponent } from './ver-tickets.component';

describe('VerTicketsComponent', () => {
  let component: VerTicketsComponent;
  let fixture: ComponentFixture<VerTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
