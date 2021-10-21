import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-mis-tickets',
  templateUrl: './mis-tickets.component.html',
  styleUrls: ['./mis-tickets.component.scss']
})
export class MisTicketsComponent implements OnInit {

 op:number;
  fechaHoy: Date;
  titulo: string
  problema: string;
  tickets: Ticket[]
  idUsuario;
  folio: string;
  constructor(private usuarioService: UsuarioService, private ticketService: TicketService, private ruta: ActivatedRoute) {
    // this.iniciarPagina();
    this.problema = "";
    this.tickets = new Array<Ticket>();

  }

   ngOnInit() {

     this.iniciarPagina();

  }



  async iniciarPagina() {

    this.op = this.ruta.snapshot.params.op;
    


    if (this.op == 1) {

      this.titulo = "Mis Tickets";
      this.ticketService.ObtnerTicketsDeUsuarioSoporte(localStorage.getItem("idUsuario")).subscribe((data) => {
     //   console.log(data);
        if (data != "Error") {
          this.tickets = <Ticket[]>data;
        }

      });
    } else {

      this.titulo = "Archivados";
      await this.ticketService.ObtenerTicketsArchivadosByUsuarioSoporte(localStorage.getItem("idUsuario"))
      .subscribe((data) => {
     //   console.log(data);
        if (data != "Error") {
          this.tickets = <Ticket[]>data;
          this.tickets.length
         // alert("Hola");
        }

      });
    }




    //let fecha1=this.ObtenerFecha()





   // console.log(this.tickets);
  }
  CerrarSesion() {
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href = "/login";
  }
  Inicio() {
    localStorage.removeItem("idUsuario");
    window.location.href = "/home";
  }
  VerDetalles(ticket) {
    localStorage.setItem("idTicket", ticket);
    window.location.href = "/DetallesTicket";
  }

}
