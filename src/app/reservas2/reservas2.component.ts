import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../shared/reserva.service';
import { Habitacion } from '../model/habitacion';
import { HabitacionService } from '../shared/habitacion.service';
import { InstalacionService } from '../shared/instalacion.service';
import { Instalacion } from '../model/instalacion';
import { HuespedService } from '../shared/huesped.service';
import { Huesped } from '../model/huesped';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Time } from "@angular/common";

@Component({
  selector: 'app-reservas2',
  templateUrl: './reservas2.component.html',
  styleUrls: ['./reservas2.component.css']
})
export class Reservas2Component implements OnInit{
  myTime: Time = { hours: 10, minutes: 30};
  nombre_cat: number = 0;
  categoriaText: string = "";
  mostrarSelectHabitacion: boolean = true;
  mostrarSelectInstalacion: boolean = false;
  cuarto: Habitacion = new Habitacion(0,"","",0,0);
  insta: Instalacion = new Instalacion(0, "", "", "", "", this.myTime, this.myTime);
  listaHabitaciones: Habitacion[] = [];
  listaEspacios: Instalacion[] = [];
  nombreHuesped: string = '';
  apellidoHuesped: string = '';
  telefono: string = '';
  correo: string = '';
  identificacion: string = '';
  categoria: string = '';
  ocupantes: number = 0;
  checkIn: Date = new Date("1900-01-01");
  checkOut: Date = new Date("1900-01-01");
  tag: string = '';
  habitacion: string = '';
  espacio: string = '';

  constructor(
    private serviceRes: ReservaService,
    private serviceHab: HabitacionService,
    private serviceEsp: InstalacionService,
    private serviceCli: HuespedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.serviceEsp.getAllInstalaciones().subscribe(espacios => this.listaEspacios = espacios);
    this.serviceHab.getAllHabitaciones().subscribe(cuartos => this.listaHabitaciones = cuartos);
  }

  crearReserva(formulario: any){
    if (formulario.valid) {
      // Crear objeto Huesped
      if (this.mostrarSelectHabitacion) {
        this.nombre_cat = this.cuarto.numero;
        this.categoriaText = this.cuarto.categoria;
      }else if (this.mostrarSelectInstalacion){
        this.nombre_cat = this.insta.id_insta;
        this.categoriaText = this.insta.nombre;
      }
      const referenciaAleatoria2 = Math.floor(Math.random() * 10000);
      const huesped = new Huesped(
        referenciaAleatoria2, // id_huesped: se generará automáticamente o se asignará desde el backend
        Number(this.identificacion),
        this.nombreHuesped,
        this.apellidoHuesped,
        this.telefono,
        this.correo,
        0 // reserva: se asignará después de crear la reserva
      );
      const referenciaAleatoria = Math.floor(Math.random() * 10000);
      // Crear objeto Reserva
      const reserva = new Reserva(
        referenciaAleatoria, // referencia: se generará automáticamente o se asignará desde el backend
        0, // huesped: se asignará después de crear el huésped
        `${this.nombreHuesped} ${this.apellidoHuesped}`,
        this.categoriaText,
        this.nombre_cat, // nombre_cat: se asignará desde la selección de categoría
        this.checkIn,
        this.checkOut,
        this.tag,
        0, // valor: se calculará o asignará posteriormente
        this.ocupantes
      );

      // Lógica para enviar los datos al backend o gestionar la creación en el servicio
      console.log('Huesped creado:', huesped);
      console.log('Reserva creada:', reserva);

      this.serviceRes.saveReserva(reserva).pipe(
        // Utiliza el operador map para extraer la reserva de la respuesta HTTP
        map((reservaGuardada: Reserva) => {
          // Ahora reservaGuardada contiene la reserva con el nuevo ID asignado
          console.log('Reserva guardada con éxito:', reservaGuardada);
          huesped.reserva = reservaGuardada.referencia; // Asigna el ID de la reserva guardada al huesped
          this.serviceCli.saveHuesped(huesped).pipe(
            map((huespedGuardado: Huesped) => {
              reservaGuardada.huesped = huespedGuardado.id_huesped;
              this.updateReserva(reservaGuardada);
              this.volverMenu();
            })
          );
        })
      ).subscribe(
        // Suscríbete para recibir la respuesta del guardado del huésped
        () => {
          console.log('Huesped guardado con éxito.');
          this.volverMenu();
        },
        (error) => {
          console.log('Error al guardar el huésped:', error);
        }
      );
    }
  }

  onCategoriaChange() {
    // Verificar el valor seleccionado en la categoría
    if (this.categoria === 'Instalacion') {
      // Ocultar el select de habitación
      this.mostrarSelectHabitacion = false;
      // Mostrar el select de instalación
      this.mostrarSelectInstalacion = true;
    } else {
      // Si la categoría no es "Instalacion", mostrar el select de habitación
      this.mostrarSelectHabitacion = true;
      // Ocultar el select de instalación
      this.mostrarSelectInstalacion = false;
    }
  }
  

  updateReserva(reservaGuardada: Reserva): void{
    this.serviceRes.modificarReserva(reservaGuardada.referencia, reservaGuardada).subscribe();
  }

  updateHuesped(huespedGuardado: Huesped): void{
    this.serviceCli.modificarHuesped(huespedGuardado.id_huesped, huespedGuardado).subscribe();
  }

  volverMenu(){
    this.router.navigate(['/reservas']);
  }

}
