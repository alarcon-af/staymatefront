import { Injectable } from '@angular/core';
import { Habitacion } from '../model/habitacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient ) { }

  private habitacionListSubject = new BehaviorSubject<Habitacion[]>([]);
  public habitacionList$ = this.habitacionListSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private listaHabitaciones: Record<number, Habitacion> = {};

  getAllHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>("http://localhost:8080/habitacion/lista-habitaciones", { headers: this.headers });
  }

  findHabitacion(id: number): Observable<Habitacion> {
    return this.http.get<Habitacion>("http://localhost:8080/habitacion/" + id);
  } 

  refreshHabitacionList(): void{
    this.getAllHabitaciones().subscribe(habitaciones => this.habitacionListSubject.next(habitaciones));
  }

  saveHabitacion(habitacion: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>("http://localhost:8080/habitacion/agregar", habitacion, {
      headers: this.headers
    });
  }

  modificarHabitacion(id: number, habitacion: Habitacion): Observable<Habitacion> {
    return this.http.put<Habitacion>("http://localhost:8080/habitacion/actualizar/" + id, habitacion, {
      headers: this.headers
    });
  }

  eliminarHabitacion(id: number): Observable<Habitacion> {
    return this.http.delete<Habitacion>("http://localhost:8080/habitacion/borrar/" + id, {
      headers: this.headers
    });
  }
}
