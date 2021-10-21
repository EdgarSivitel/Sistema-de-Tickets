import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartfactoryComponent } from './smartfactory.component';

describe('SmartfactoryComponent', () => {
  let component: SmartfactoryComponent;
  let fixture: ComponentFixture<SmartfactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartfactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
