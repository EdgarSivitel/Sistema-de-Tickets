import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-tickets-pendientes',
  templateUrl: './tickets-pendientes.component.html',
  styleUrls: ['./tickets-pendientes.component.scss']
})
export class TicketsPendientesComponent implements OnInit {

  
  fechaHoy: Date;
  
  problema: string;
  tickets:Ticket[]
  idUsuario;
  folio:string;
  constructor(private usuarioService:UsuarioService,private ticketService:TicketService) { 
   // this.iniciarPagina();
   this.problema="";
   this.tickets=new Array<Ticket>();
   
  }

   ngOnInit() {
    
      this.iniciarPagina();
    
  }


  
  async iniciarPagina(){
    
   this.ticketService.ObtnerTicketsPendientes().subscribe((data)=>{
  //  console.log(data);
    if(data!="Error"){
       this.tickets=<Ticket[]>data;
    }
    
  });
    //let fecha1=this.ObtenerFecha()





  //  console.log(this.tickets);
  }
  CerrarSesion(){
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href="/login";
  }
  Inicio(){
    localStorage.removeItem("idUsuario");
    window.location.href="/home";
  }
  VerDetalles(ticket){
    localStorage.setItem("idTicket",ticket);
    window.location.href="/DetallesTicket";
  }
}
