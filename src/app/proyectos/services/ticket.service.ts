import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporteN } from '../interface/reporte';
import { Ticket, TicketN } from '../interface/ticket';
import { servidor } from './servidorURL';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

ObtnerFolio(){
  return this.http.get("http://"+servidor+":4000/GetFolio");
}

CrearTicket(data:TicketN){
  return this.http.post("http://"+servidor+":4000/NuevoTicket",{data:data});
}

ObtnerTicketsUsuario(idUsuario:string){
  return this.http.get("http://"+servidor+":4000/GetTicketsUsuario?idUsuario="+idUsuario);
}

ObtenerTicketbyID(id){
  return this.http.get("http://"+servidor+":4000/GetTicketById?idTicket="+id);
}
ObtnerTicketsPendientes(){
  return this.http.get("http://"+servidor+":4000/GetTicketsPendientes");
}
ObtnerTicketsDeUsuarioSoporte(idUsuario:string){
  return this.http.get("http://"+servidor+":4000/GetTicketsUsuarioSoporte?idUsuario="+idUsuario);
}
ActulizarTicket(data:Ticket){
  return this.http.put("http://"+servidor+":4000/ActulizarTicket",{data:data});
}
 ObtenerTicketsArchivadosByUsuarioSoporte(idUsuario:string){
   return  this.http.get("http://"+servidor+":4000/GetTicketsArchivadosSoporte?idUsuario="+idUsuario);
}
ObtenerTicketsArchivadosByUsuario(idUsuario:string){
  return  this.http.get("http://"+servidor+":4000/GetTicketsArchivados?idUsuario="+idUsuario);
}

AllTickets(){
  return this.http.get("http://"+servidor+":4000/AllTickets");
}
ObtenerTicketsArchivadosByVentas(id: string){
  return this.http.get("http://"+servidor+":4000/AllTickets");
}

}
