import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReserva1Component } from './modificar-reserva1.component';

describe('ModificarReserva1Component', () => {
  let component: ModificarReserva1Component;
  let fixture: ComponentFixture<ModificarReserva1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarReserva1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarReserva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
