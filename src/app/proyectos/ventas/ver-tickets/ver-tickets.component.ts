import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-ver-tickets',
  templateUrl: './ver-tickets.component.html',
  styleUrls: ['./ver-tickets.component.scss']
})
export class VerTicketsComponent1 implements OnInit {
  titulo: string;
  fechaHoy: Date;
  op: number;
  problema: string;
  tickets: Ticket[]
  idUsuario;
  folio: string;
  archivado: Ticket[];

  constructor(private usuarioService: UsuarioService, private ticketService: TicketService, private ruta: ActivatedRoute) {
    this.archivado=new Array();
   }

  ngOnInit(): void {
    this.iniciarPagina();
  }


  async iniciarPagina() {



    this.op = this.ruta.snapshot.params.op;
    //console.log(this.op);
    if (this.op == 1) {
      this.titulo = "Tickets";
      this.ticketService.AllTickets().subscribe((data) => {

        if (data != "Error") {
          this.tickets = <Ticket[]>data;

         // console.log("Hola");
          this.tickets.forEach((ticket,index)=>{
            

            ticket.archivadoVentas.forEach((archivo,index1)=>{
              if(archivo.idUsuario==localStorage.getItem("idUsuario") && archivo.archivado){
               // console.log(index);
                this.tickets.splice(index,1);
                //console.log(elemento);
              }
            });

           
          });
          

        }
        //console.log(this.tickets);

      });
    } else {
      this.titulo = "Archivados";
      this.ticketService.AllTickets().subscribe((data) => {
        // console.log(data);
        if (data != "Error") {
          this.tickets = <Ticket[]>data;

          console.log(this.tickets);

          this.tickets.forEach((ticket,index)=>{
            
           // console.log(ticket); 
            
           let length:number =ticket.archivadoVentas.length;
           

            

            

              ticket.archivadoVentas.forEach((archivo,index1)=>{
                console.log(archivo);
                if(archivo.idUsuario==localStorage.getItem("idUsuario") && archivo.archivado){
                  console.log(index);
                  this.archivado.push(ticket);
                  //console.log(elemento);
                }
              });
            



           

           
          });
          console.log(this.tickets);
        }

      });
    }



    //let fecha1=this.ObtenerFecha()


    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data: Usuario) => {
      if (data._id != "Error") {
        this.idUsuario = data._id;

      }
    });



    // console.log(this.tickets);
  }
  CerrarSesion() {
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href = "/login";
  }
  Inicio() {
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    window.location.href = "/home";
  }
  VerDetalles(ticket) {
    localStorage.setItem("idTicket", ticket);
    window.location.href = "/VerTicket";
  }

}
