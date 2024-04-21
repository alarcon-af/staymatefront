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

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'huespedes', component: HuespedesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'mod-reserva', component: ModificarReserva1Component },
  { path: 'mod-reserva2', component: ModificarReserva2Component },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'reservas1', component: Reservas1Component },
  { path: 'reservas2', component: Reservas2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
