import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { HuespedesComponent } from './huespedes/huespedes.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingComponent } from './landing/landing.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ModificarReserva1Component } from './modificar-reserva1/modificar-reserva1.component';
import { ModificarReserva2Component } from './modificar-reserva2/modificar-reserva2.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { Reservas1Component } from './reservas1/reservas1.component';
import { Reservas2Component } from './reservas2/reservas2.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'calendario', component: CalendarioComponent, canActivate: [AuthGuard] },
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard] },
  { path: 'huespedes', component: HuespedesComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'log-out', component: LogOutComponent, canActivate: [AuthGuard] },
  { path: 'mod-reserva/:id', component: ModificarReserva1Component, canActivate: [AuthGuard] },
  { path: 'mod-reserva2', component: ModificarReserva2Component, canActivate: [AuthGuard] },
  { path: 'registrar', component: RegistrarComponent, canActivate: [AuthGuard] },
  { path: 'reportes', component: ReportesComponent, canActivate: [AuthGuard] },
  { path: 'reservas', component: ReservasComponent, canActivate: [AuthGuard] },
  { path: 'reservas1', component: Reservas1Component, canActivate: [AuthGuard] },
  { path: 'reservas2', component: Reservas2Component, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
