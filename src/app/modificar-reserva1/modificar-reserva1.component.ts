import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../shared/reserva.service';
import { Habitacion } from '../model/habitacion';
import { HabitacionService } from '../shared/habitacion.service';
import { InstalacionService } from '../shared/instalacion.service';
import { Instalacion } from '../model/instalacion';

@Component({
  selector: 'app-modificar-reserva1',
  templateUrl: './modificar-reserva1.component.html',
  styleUrls: ['./modificar-reserva1.component.css']
})
export class ModificarReserva1Component implements OnInit {

  listaHabitaciones: Habitacion[] = [];
  listaEspacios: Instalacion[] = [];
  reserva: Reserva = new Reserva(0, 0, "", "", 0, new Date("1900-01-01"), new Date("1900-02-01"), "", 0, 0); //0, 0, "", "", 0, new Date("1900-01-01"), new Date("1900-02-01"), "", 0, 0
  opcionesUnidad: any[] = [];
  opcionesInstalacion: any[] = [];

  constructor(
    private serviceRes: ReservaService,
    private serviceHab: HabitacionService,
    private serviceEsp: InstalacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const reservaId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceRes.findReserva(reservaId).subscribe(reserva => {
      this.reserva = reserva;
    });
    this.serviceEsp.instalacionList$.subscribe(espacios => this.listaEspacios = espacios);
    this.serviceHab.habitacionList$.subscribe(habitaciones => this.listaHabitaciones = habitaciones);
  }

  loadOptions(): void {
    if (this.reserva.categoria === 'Habitacion estandar' || this.reserva.categoria === 'Suite') {
      this.opcionesUnidad = this.filterByCategoria(this.listaHabitaciones, this.reserva.categoria);
    } else {
      this.opcionesInstalacion = this.listaEspacios.map(espacio => ({ value: espacio.nombre, label: espacio.nombre }));
    }
  }

  filterByCategoria(habitaciones: Habitacion[], categoria: string): any[] {
    return habitaciones.filter(habitacion => habitacion.categoria === categoria)
                        .map(habitacion => ({ value: habitacion.numero, label: `Habitación ${habitacion.numero}` }));
  }

  updateReserva(){
    this.serviceRes.modificarReserva(this.reserva.referencia, this.reserva).subscribe();
    this.volverMenu();
  }

  eliminarReserva(){
    this.serviceRes.eliminarReserva(this.reserva.referencia).subscribe(
      () => {
        this.router.navigate(['/reservas']).then(() => {
          this.serviceRes.refreshReservaList();
        });
      } 
    )
  }

  volverMenu(){
    this.router.navigate(['/reservas']);
  }

}
