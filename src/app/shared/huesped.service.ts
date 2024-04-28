import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Huesped } from '../model/huesped';

@Injectable({
  providedIn: 'root'
})
export class HuespedService {

  constructor(private http: HttpClient ) { }

  private huespedListSubject = new BehaviorSubject<Huesped[]>([]);
  public huespedList$ = this.huespedListSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private listaHuespedes: Record<number, Huesped> = {};

  getAllHuespedes(): Observable<Huesped[]> {
    return this.http.get<Huesped[]>("http://localhost:8080/huesped/lista-huespedes", { headers: this.headers });
  }

  findHuesped(id: number): Observable<Huesped> {
    return this.http.get<Huesped>("http://localhost:8080/huesped/" + id);
  } 

  refreshHuespedList(): void{
    this.getAllHuespedes().subscribe(huespedes => this.huespedListSubject.next(huespedes));
  }

  saveHuesped(huesped: Huesped): Observable<Huesped> {
    return this.http.post<Huesped>("http://localhost:8080/huesped/agregar", huesped, {
      headers: this.headers
    });
  }

  modificarHuesped(id: number, huesped: Huesped): Observable<Huesped> {
    return this.http.put<Huesped>("http://localhost:8080/huesped/actualizar/" + id, huesped, {
      headers: this.headers
    });
  }

  eliminarHuesped(id: number): Observable<Huesped> {
    return this.http.delete<Huesped>("http://localhost:8080/huesped/borrar/" + id, {
      headers: this.headers
    });
  }
}
