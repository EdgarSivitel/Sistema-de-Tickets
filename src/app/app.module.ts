import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductosComponent } from './home/productos/productos.component';
import { ServiciosComponent } from './home/servicios/servicios.component';

import { LoginComponent } from './proyectos/login/login.component';
import { MenuComponent } from './proyectos/menu/menu.component';
import { NuevoTicketComponent } from './proyectos/nuevo-ticket/nuevo-ticket.component';
import { RegistroComponent } from './proyectos/registro/registro.component';
import { VerTicketsComponent } from './proyectos/ver-tickets/ver-tickets.component';
import { VerTicketComponent } from './proyectos/ver-ticket/ver-ticket.component';
import { BuscarTicketComponent } from './proyectos/buscar-ticket/buscar-ticket.component';
import { MenuClienteComponent } from './proyectos/menu/menu-cliente/menu-cliente.component';
import { MenuSoporteComponent } from './proyectos/menu/menu-soporte/menu-soporte.component';
import { TicketsPendientesComponent } from './proyectos/soporte/tickets-pendientes/tickets-pendientes.component';
import { DetallesTicketComponent } from './proyectos/soporte/detalles-ticket/detalles-ticket.component';
import { MisTicketsComponent } from './proyectos/soporte/mis-tickets/mis-tickets.component';
import { AgregarReporteComponent } from './proyectos/soporte/agregar-reporte/agregar-reporte.component';
import { InformacionComponent } from './proyectos/ver-ticket/informacion/informacion.component';
import { ReportesComponent } from './proyectos/ver-ticket/reportes/reportes.component';
import { TelecomunicacionesComponent } from './telecomunicaciones/telecomunicaciones.component';
import { IncendiosComponent } from './incendios/incendios.component';
import { AccesoComponent } from './acceso/acceso.component';
import { SonidoComponent } from './sonido/sonido.component';
import { EnergiaComponent } from './energia/energia.component';
import { FotovoltaicosComponent } from './fotovoltaicos/fotovoltaicos.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { SmartfactoryComponent } from './smartfactory/smartfactory.component';
import { PlantillaCorreoComponent } from './plantilla-correo/plantilla-correo.component';
import { RecuperarContasenaComponent } from './proyectos/recuperar-contasena/recuperar-contasena.component';
import { CambiarContrasenaComponent } from './proyectos/cambiar-contrasena/cambiar-contrasena.component';
import { PerfilComponent } from './proyectos/perfil/perfil.component';
import { MenuVentasComponent } from './proyectos/menu/menu-ventas/menu-ventas.component';
import {VerTicketsComponent1} from './proyectos/ventas/ver-tickets/ver-tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductosComponent,
    ServiciosComponent,
    
    LoginComponent,
         MenuComponent,
         NuevoTicketComponent,
         RegistroComponent,
         VerTicketsComponent,
         VerTicketComponent,
         BuscarTicketComponent,
         MenuClienteComponent,
         MenuSoporteComponent,
         TicketsPendientesComponent,
         DetallesTicketComponent,
         MisTicketsComponent,
         AgregarReporteComponent,
         InformacionComponent,
         ReportesComponent,
         TelecomunicacionesComponent,
         IncendiosComponent,
         AccesoComponent,
         SonidoComponent,
         EnergiaComponent,
         FotovoltaicosComponent,
         DataCenterComponent,
         SmartfactoryComponent,
         PlantillaCorreoComponent,
         RecuperarContasenaComponent,
         CambiarContrasenaComponent,
         PerfilComponent,
         MenuVentasComponent,
         VerTicketsComponent1
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaV3Module
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Ld2yqcbAAAAAD4RuKpbyPwCddqycSgmpi1H9HK1" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
