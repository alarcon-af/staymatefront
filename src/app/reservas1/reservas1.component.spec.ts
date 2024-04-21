import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservas1Component } from './reservas1.component';

describe('Reservas1Component', () => {
  let component: Reservas1Component;
  let fixture: ComponentFixture<Reservas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservas1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
