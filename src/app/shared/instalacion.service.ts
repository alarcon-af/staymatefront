import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Instalacion } from '../model/instalacion';

@Injectable({
  providedIn: 'root'
})
export class InstalacionService {

  constructor(private http: HttpClient ) { }

  private instalacionListSubject = new BehaviorSubject<Instalacion[]>([]);
  public instalacionList$ = this.instalacionListSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private listaInstalaciones: Record<number, Instalacion> = {};

  getAllInstalaciones(): Observable<Instalacion[]> {
    return this.http.get<Instalacion[]>("http://localhost:8080/instalacion/lista-instalaciones", { headers: this.headers });
  }

  findInstalacion(id: number): Observable<Instalacion> {
    return this.http.get<Instalacion>("http://localhost:8080/instalacion/" + id);
  } 

  refreshInstalacionList(): void{
    this.getAllInstalaciones().subscribe(instalaciones => this.instalacionListSubject.next(instalaciones));
  }

  saveInstalacion(instalacion: Instalacion): Observable<Instalacion> {
    return this.http.post<Instalacion>("http://localhost:8080/instalacion/agregar", instalacion, {
      headers: this.headers
    });
  }

  modificarInstalacion(id: number, instalacion: Instalacion): Observable<Instalacion> {
    return this.http.put<Instalacion>("http://localhost:8080/instalacion/actualizar/" + id, instalacion, {
      headers: this.headers
    });
  }

  eliminarInstalacion(id: number): Observable<Instalacion> {
    return this.http.delete<Instalacion>("http://localhost:8080/instalacion/borrar/" + id, {
      headers: this.headers
    });
  }
}
