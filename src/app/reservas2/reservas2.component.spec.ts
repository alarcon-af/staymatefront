import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservas2Component } from './reservas2.component';

describe('Reservas2Component', () => {
  let component: Reservas2Component;
  let fixture: ComponentFixture<Reservas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reservas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
