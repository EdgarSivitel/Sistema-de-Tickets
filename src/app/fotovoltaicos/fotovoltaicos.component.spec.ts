import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotovoltaicosComponent } from './fotovoltaicos.component';

describe('FotovoltaicosComponent', () => {
  let component: FotovoltaicosComponent;
  let fixture: ComponentFixture<FotovoltaicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotovoltaicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotovoltaicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
