import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CctvComponent } from './cctv/cctv.component';
import { TelefoniaComponent } from './telefonia/telefonia.component';
import { LoginComponent } from './proyectos/login/login.component';
import { MenuComponent } from './proyectos/menu/menu.component';
import { NuevoTicketComponent } from './proyectos/nuevo-ticket/nuevo-ticket.component';
import { RegistroComponent } from './proyectos/registro/registro.component';
import { VerTicketsComponent } from './proyectos/ver-tickets/ver-tickets.component';
import { VerTicketComponent } from './proyectos/ver-ticket/ver-ticket.component';
import { BuscarTicketComponent } from './proyectos/buscar-ticket/buscar-ticket.component';
import { TicketsPendientesComponent } from './proyectos/soporte/tickets-pendientes/tickets-pendientes.component';
import { DetallesTicketComponent } from './proyectos/soporte/detalles-ticket/detalles-ticket.component';
import { MisTicketsComponent } from './proyectos/soporte/mis-tickets/mis-tickets.component';
import { AgregarReporteComponent } from './proyectos/soporte/agregar-reporte/agregar-reporte.component';
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
import {VerTicketsComponent1} from './proyectos/ventas/ver-tickets/ver-tickets.component';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cctv', component: CctvComponent },
  { path: 'telefonia', component: TelefoniaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'nuevo-ticket', component: NuevoTicketComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'VerTickets/:op', component: VerTicketsComponent },
  { path: 'VerTicket', component: VerTicketComponent },
  { path: 'BuscarTicket', component: BuscarTicketComponent },
  { path: 'TicketsPendientes', component: TicketsPendientesComponent },
  { path: 'DetallesTicket', component: DetallesTicketComponent },
  //{ path: 'MisTickets', component:MisTicketsComponent},
  { path: 'AgregarReporte', component: AgregarReporteComponent },
  { path: 'MisTickets/:op', component: MisTicketsComponent },
  { path: 'Telecomunicaciones', component: TelecomunicacionesComponent },
  { path: 'Control-de-incendios', component: IncendiosComponent },
  { path: 'Control-de-acceso', component: AccesoComponent },
  { path: 'Sonido', component: SonidoComponent },
  { path: 'Calidad-de-energia', component: EnergiaComponent },
  { path: 'Fotovoltaicos', component: FotovoltaicosComponent },
  {path: 'Datacenter', component: DataCenterComponent },
  {path: 'Smartfactory', component: SmartfactoryComponent},
  {path: 'Correo', component: PlantillaCorreoComponent},
  {path: 'Recuperar-contrasena',component: RecuperarContasenaComponent},
  {path: 'CambiarContrasena/:id', component: CambiarContrasenaComponent},
  {path: 'Perfil', component: PerfilComponent},
  {path: 'VerTicketsVentas/:op', component: VerTicketsComponent1}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
