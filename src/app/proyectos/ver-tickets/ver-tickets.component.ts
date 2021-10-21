import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../interface/ticket';
import { Usuario } from '../interface/usuario';
import { TicketService } from '../services/ticket.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-ver-tickets',
  templateUrl: './ver-tickets.component.html',
  styleUrls: ['./ver-tickets.component.scss']
})
export class VerTicketsComponent implements OnInit {

 
  titulo:string;
  fechaHoy: Date;
  op:number;
  problema: string;
  tickets:Ticket[]
  idUsuario;
  folio:string;
  constructor(private usuarioService:UsuarioService,private ticketService:TicketService,private ruta: ActivatedRoute) { 
   // this.iniciarPagina();
   this.problema="";
   this.tickets=new Array<Ticket>();
   
  }

   ngOnInit() {
    
      this.iniciarPagina();
    
  }


  ObtenerFecha(){
    this.fechaHoy=new Date();
    let fecha=(this.fechaHoy.getDate()/10==0?this.fechaHoy.getDate():"0"+this.fechaHoy.getDate())+"-"+((this.fechaHoy.getMonth()+1)/10==0?this.fechaHoy.getMonth()+1:"0"+(this.fechaHoy.getMonth()+1))+"-"+this.fechaHoy.getFullYear()+"   Hora:"+this.fechaHoy.getHours()+":"+this.fechaHoy.getMinutes();
    (<HTMLInputElement>document.getElementById("Fecha1")).setAttribute("value",fecha);
    return fecha;
  }
  async iniciarPagina(){



    this.op = this.ruta.snapshot.params.op;

    if(this.op==1){
      this.titulo ="Mis Tickets";
      this.ticketService.ObtnerTicketsUsuario(localStorage.getItem("idUsuario")).subscribe((data)=>{
      //  console.log(data);
        if(data!="Error"){
           this.tickets=<Ticket[]>data;
        }
        
      });
    }else{
      this.titulo ="Archivados";
      this.ticketService.ObtenerTicketsArchivadosByUsuario(localStorage.getItem("idUsuario")).subscribe((data)=>{
       // console.log(data);
        if(data!="Error"){
           this.tickets=<Ticket[]>data;
        }
        
      });
    }
    
    
   
    //let fecha1=this.ObtenerFecha()


    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data:Usuario)=>{
      if(data._id!="Error"){
        this.idUsuario=data._id;
        
      }
    });



   // console.log(this.tickets);
  }
  CerrarSesion(){
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href="/login";
  }
  Inicio(){
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href="/home";
  }
  VerDetalles(ticket){
    localStorage.setItem("idTicket",ticket);
    window.location.href="/VerTicket";
  }
}
