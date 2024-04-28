import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from '../model/solicitud';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-reservas1',
  templateUrl: './reservas1.component.html',
  styleUrls: ['./reservas1.component.css']
})
export class Reservas1Component implements OnInit {

  listaSolicitudes: Solicitud[] = [];

  constructor(
    private service: SolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.solicitudList$.subscribe(solicitudes => {
      console.log('Datos recibidos:', solicitudes);
      this.listaSolicitudes = solicitudes;
    });
  }

  crearReserva(): void {
    this.router.navigate(['/reservas2/'])
  }

  getSolicitudes() {
    this.service.getAllSolicitudes().subscribe(solicitudes => this.listaSolicitudes = solicitudes);
  }

}
