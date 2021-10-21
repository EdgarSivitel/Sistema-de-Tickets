import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { TicketService } from '../services/ticket.service';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Ticket, TicketN } from '../interface/ticket';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.scss']
})
export class NuevoTicketComponent implements OnInit {

  nombre: string;
  ubicacion: string;
  fechaHoy: Date;
  empresa:string;
  problema: string;
  telefono: string
  comentarios:string;
  idUsuario;
  folio:string;
  constructor(private usuarioService:UsuarioService,private ticketService:TicketService) { 
   // this.iniciarPagina();
   this.problema="";
   this.nombre="";
   this.ubicacion="";
   this.comentarios="";
   this.telefono="";
  }

  ngOnInit(): void {
    
      this.iniciarPagina();
    
  }


  ObtnerFolio(){
    let folioAnterior=this.ticketService.ObtnerFolio();
  }

  ObtenerFecha(){
    this.fechaHoy=new Date();
    let fecha=(this.fechaHoy.getDate()/10==0?this.fechaHoy.getDate():"0"+this.fechaHoy.getDate())+"-"+((this.fechaHoy.getMonth()+1)/10==0?this.fechaHoy.getMonth()+1:"0"+(this.fechaHoy.getMonth()+1))+"-"+this.fechaHoy.getFullYear()+"   Hora:"+this.fechaHoy.getHours()+":"+this.fechaHoy.getMinutes();
    (<HTMLInputElement>document.getElementById("Fecha1")).setAttribute("value",fecha);
    return fecha;
  }
  iniciarPagina(){
    let fecha1=this.ObtenerFecha()


    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data:Usuario)=>{
      if(data._id!="Error"){
        this.idUsuario=data._id;
        this.nombre=data.nombre;

        if(data.tipo!=2){
          this.ubicacion=data.ubicacion;
          this.empresa=data.empresa;
        }

       
      }
    });
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


  CrearTicket(){
    if(this.problema=="" || this.nombre=="" || this.ubicacion==""){
      Swal.fire({  
        text: 'Datos incompletos',
        position: 'center',  
        icon: 'error',  
        title: 'Error',  
       
        showConfirmButton: true,  
        
      });  
    }else{
      let data:TicketN={
        solicitante:this.idUsuario,
        fechaInicio: this.ObtenerFecha(),
        ubicacion: this.ubicacion,
        reporte: this.problema,
        comentarios: this.comentarios,
        telefono:this.telefono,
        estatus: 'Pendiente' //Sin atender
      };
      this.ticketService.CrearTicket(data).subscribe((data: Ticket)=>{
      //  console.log(data);
        if(data._id!="Error"){
            this.folio=data._id;
            (<HTMLInputElement>document.getElementById("BtnCrear")).classList.add("d-none");
            
        }
      });
    //  console.log(data);
    }
  }

}
