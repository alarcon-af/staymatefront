import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogOutComponent } from './log-out/log-out.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReservasComponent } from './reservas/reservas.component';
import { Reservas1Component } from './reservas1/reservas1.component';
import { Reservas2Component } from './reservas2/reservas2.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { LandingComponent } from './landing/landing.component';
import { ModificarReserva1Component } from './modificar-reserva1/modificar-reserva1.component';
import { ModificarReserva2Component } from './modificar-reserva2/modificar-reserva2.component';
import { HuespedesComponent } from './huespedes/huespedes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    LogOutComponent,
    InicioComponent,
    RegistrarComponent,
    ReservasComponent,
    Reservas1Component,
    Reservas2Component,
    CalendarioComponent,
    LandingComponent,
    ModificarReserva1Component,
    ModificarReserva2Component,
    HuespedesComponent,
    ReportesComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
