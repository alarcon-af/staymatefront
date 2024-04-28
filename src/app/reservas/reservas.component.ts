import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../shared/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  listaReservas: Reserva[] = [];

  constructor(
    private service: ReservaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.reservaList$.subscribe(reservas => this.listaReservas = reservas);
    this.service.refreshReservaList();
  }

  crearReserva(): void {
    this.router.navigate(['/reservas1'])
  }

  getReservas() {
    this.service.getAllReservas().subscribe(reservas => this.listaReservas = reservas);
  }

}
