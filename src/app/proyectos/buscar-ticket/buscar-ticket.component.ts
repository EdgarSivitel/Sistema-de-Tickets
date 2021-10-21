import { Component, OnInit } from '@angular/core';
import { Ticket } from '../interface/ticket';
import { Usuario } from '../interface/usuario';
import { TicketService } from '../services/ticket.service';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-buscar-ticket',
  templateUrl: './buscar-ticket.component.html',
  styleUrls: ['./buscar-ticket.component.scss']
})
export class BuscarTicketComponent implements OnInit {



  EsSoporte: boolean;
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
  constructor(private usuarioService: UsuarioService, private ticketService: TicketService) {
    this.folio = "";
  }

  ngOnInit(): void {
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

  Buscar() {
    if (this.folio != "") {


      this.ticketService.ObtenerTicketbyID(this.folio).subscribe((data: Ticket | any) => {
        //console.log(data);
        if (data == null || data == "Error") {
          Swal.fire({
            text: 'Folio no encontrado',
            position: 'center',
            icon: 'info',
            title: 'Error',

            showConfirmButton: true,

          });
          this.problema = "";
          this.nombre = "";
          this.ubicacion = "";
          this.comentarios = "";
          this.telefono = "";
          this.fechaHoy="";
        } else if (data._id != "Error") {


          this.problema = data.reporte;
          this.comentarios = data.comentarios;
          this.telefono = data.telefono;
          // this.nombre=data.solicitante;
          this.folio = data._id;
          this.fechaHoy = data.fechaInicio;
          this.estatus = data.estatus;


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
        }

      });

      this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((userInfo: Usuario) => {
        if (userInfo._id != "Error") {

          if (userInfo.tipo == 3) {
            this.EsSoporte = true;
          } else {
            this.EsSoporte = false;
          }
        }
      });
    } else {
      alert("Error");
    }
  }
}
