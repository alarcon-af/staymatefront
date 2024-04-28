import { Injectable } from '@angular/core';
import { Solicitud } from '../model/solicitud';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient ) { }

  private solicitudListSubject = new BehaviorSubject<Solicitud[]>([]);
  public solicitudList$ = this.solicitudListSubject.asObservable();

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private listaSolicitudes: Record<number, Solicitud> = {};


  getAllSolicitudes(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>("http://localhost:3002/hoteles/solicitudes", { headers: this.headers });
  }

  findSolicitud(id:number): Observable<Solicitud>{
    return this.http.get<Solicitud>("http://localhost:3002/hoteles/solicitudes/" + id);
  }

  refreshSolicitudesList(): void{
    this.getAllSolicitudes().subscribe(solicitudes => this.solicitudListSubject.next(solicitudes));
  }
}
