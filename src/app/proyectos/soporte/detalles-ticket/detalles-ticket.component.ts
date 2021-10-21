import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-detalles-ticket',
  templateUrl: './detalles-ticket.component.html',
  styleUrls: ['./detalles-ticket.component.scss']
})
export class DetallesTicketComponent implements OnInit {

  EsFinalizado: boolean;
  AgregarReporte: boolean;
  nombre: string;
  ubicacion: string;
  fechaHoy: string;
  empresa: string;
  problema: string;
  telefono: string
  comentarios: string;
  idUsuario;
  folio: string;
  estatus: string;
  encargado: string;

  archivado: boolean;
  data: Ticket;
  constructor(private usuarioService: UsuarioService, private ticketService: TicketService) {
    // this.iniciarPagina();
    this.problema = "";
    this.nombre = "";
    this.ubicacion = "";
    this.comentarios = "";
    this.telefono = "";
    this.archivado = false;
  }

  ngOnInit(): void {

    this.iniciarPagina();

  }


  Regresar() {
    //    alert(this.archivado);
    if (this.archivado) {
      window.location.href = "/MisTickets/2";
    } else if (this.AgregarReporte) {
      window.location.href = "/MisTickets/1";
    } else {
      window.location.href = "/TicketsPendientes";
    }
  }

  iniciarPagina() {



    this.ticketService.ObtenerTicketbyID(localStorage.getItem("idTicket")).subscribe((data: Ticket) => {
      this.problema = data.reporte;
      this.comentarios = data.comentarios;
      this.telefono = data.telefono;
      // this.nombre=data.solicitante;
      this.folio = data._id;
      this.fechaHoy = data.fechaInicio;
      this.estatus = data.estatus;
      this.archivado = data.archivado;
      this.data = data;


      if (data.estatus == "Finalizado") {
        this.EsFinalizado = true;
      } else {
        this.EsFinalizado = false;
      }


      if (this.estatus == "En Proceso" || this.estatus == "Finalizado") {
        this.AgregarReporte = true;
      }
      this.usuarioService.ObtenerUsuarioByID(data.solicitante).subscribe((data1: Usuario) => {
        if (data._id != "Error") {

          this.nombre = data1.nombre;
          this.ubicacion = data1.ubicacion;
          this.empresa = data1.empresa;
        }
      });

      if (data.encargado != null) {

        this.usuarioService.ObtenerUsuarioByID(data.encargado).subscribe((data3: Usuario) => {
          if (data3._id != "Error") {

            this.encargado = data3.nombre;

          }
        });
      }

    });



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
  TomarTicket() {

    Swal.fire({
      text: '¿Seguro que desea Tomar el Ticket?',
      position: 'center',
      icon: 'question',
      title: 'Precaución',

      showConfirmButton: true,
      confirmButtonText: `Si`,
      showCancelButton: true,
      CancelButtonText: 'No',

    }).then((result) => {

      if (result.isConfirmed) {
        this.data.encargado = localStorage.getItem("idUsuario");
        this.data.estatus = "En Proceso";
        this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data3: Usuario) => {
          if (data3._id != "Error") {
    
            this.encargado = data3.nombre;
    
          }
        });
        //console.log(this.data);
    
    
    
        this.ticketService.ActulizarTicket(this.data).subscribe((data) => {
          if (data != "Error") {
            (<HTMLInputElement>document.getElementById("BtnTomar")).classList.add("d-none");
            this.AgregarReporte = true;
          } else {
         //   console.log(data);
          }
        });
      }
    });





   
  }
  AgregarReporteFuncion() {
    if (this.AgregarReporte) {
      localStorage.setItem("EsDePendientes", "true");
    } else {
      localStorage.setItem("EsDePendientes", "false");
    }
    window.location.href = "/AgregarReporte";
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
        this.data.archivado = true;
        this.ticketService.ActulizarTicket(this.data).subscribe((data) => {
        //  console.log(data);
          window.location.href = "/menu";
        });

      }
    });










  }

}
