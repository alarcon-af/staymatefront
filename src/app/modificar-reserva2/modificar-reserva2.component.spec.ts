import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReserva2Component } from './modificar-reserva2.component';

describe('ModificarReserva2Component', () => {
  let component: ModificarReserva2Component;
  let fixture: ComponentFixture<ModificarReserva2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarReserva2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarReserva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
