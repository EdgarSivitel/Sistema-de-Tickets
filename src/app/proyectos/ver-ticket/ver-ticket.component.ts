import { Component, OnInit } from '@angular/core';
import { Reporte } from '../interface/reporte';
import { Ticket } from '../interface/ticket';
import { Usuario } from '../interface/usuario';
import { ReportesService } from '../services/reportes.service';
import { TicketService } from '../services/ticket.service';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ver-ticket',
  templateUrl: './ver-ticket.component.html',
  styleUrls: ['./ver-ticket.component.scss']
})
export class VerTicketComponent implements OnInit {

  archivado: boolean;
  VerReportes: boolean;
  data: Ticket;
  EsFinalizado: boolean;
  EsVentas: boolean;
  constructor(private usuarioService: UsuarioService, private ticketService: TicketService) {
    // this.iniciarPagina();

  }

  ngOnInit(): void {

    this.iniciarPagina();

  }



  iniciarPagina() {


    this.ticketService.ObtenerTicketbyID(localStorage.getItem("idTicket")).subscribe((data: Ticket) => {
      if (<any>data != "Error") {

        this.EsFinalizado =data.estatus == "Finalizado" ? true : false;


        
        this.data = data;
      }
    });

    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data: Usuario) => {
      if(data._id!="Error") {
          if(data.tipo==2){
            this.EsVentas=true;
            console.log(this.data.archivadoVentas);

            


            this.archivado = (this.data.archivadoVentas.find((item)=>{
              console.log(item);
              return item.idUsuario==localStorage.getItem("idUsuario")
            })!=void(0))?true:false;
            
          }else{
            this.EsVentas=false;
            this.archivado = this.data.archivadoUsuario;
          }
      }
    });




  }
  Regresar() {


    if(this.EsVentas){
      if (this.archivado) {
        window.location.href = "/VerTicketsVentas/2";
  
      } else {
        window.location.href = "/VerTicketsVentas/1";
      }
    }else{
      if (this.archivado) {
        window.location.href = "/VerTickets/2";
  
      } else {
        window.location.href = "/VerTickets/1";
      }
    }

    
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
  CambioDeEstado() {
    // alert((<HTMLInputElement>document.getElementById("VerReportes")).checked);
    if ((<HTMLInputElement>document.getElementById("VerReportes")).checked) {
      this.VerReportes = true;
    } else {
      this.VerReportes = false;
    }
  }

  Archivar() {

    Swal.fire({
      text: '¿Seguro que desea Archivar?',
      position: 'center',
      icon: 'question',
      title: 'Precaución',

      showConfirmButton: true,
      confirmButtonText: `Si`,
      showCancelButton: true,
      CancelButtonText: 'No',

    }).then((result) => {

      if (result.isConfirmed) {

        if(this.EsVentas){
          this.data.archivadoVentas.push({
            idUsuario:localStorage.getItem("idUsuario"),
            archivado:true
          })
          
          this.ticketService.ActulizarTicket(this.data).subscribe((data)=>{
            window.location.href = "/menu";
          });
          

        }else{
          this.data.archivadoUsuario = true;
          this.ticketService.ActulizarTicket(this.data).subscribe((data) => {
            // console.log(data);
            window.location.href = "/menu";
          });
        }


       

      }
    });





  }


}
