import { Injectable } from '@angular/core';
import { Reserva } from '../model/reserva';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient ) { }

  private reservaListSubject = new BehaviorSubject<Reserva[]>([]);
  public reservaList$ = this.reservaListSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private listaReservas: Record<number, Reserva> = {};

  getAllReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>("http://localhost:8080/reserva/lista-reservas", { headers: this.headers });
  }

  findReserva(id: number): Observable<Reserva> {
    return this.http.get<Reserva>("http://localhost:8080/reserva/" + id);
  } 

  refreshReservaList(): void{
    this.getAllReservas().subscribe(reservaes => this.reservaListSubject.next(reservaes));
  }

  saveReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>("http://localhost:8080/reserva/agregar", reserva, {
      headers: this.headers
    });
  }

  modificarReserva(id: number, reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>("http://localhost:8080/reserva/actualizar/" + id, reserva, {
      headers: this.headers
    });
  }

  eliminarReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>("http://localhost:8080/reserva/borrar/" + id, {
      headers: this.headers
    });
  }
}
