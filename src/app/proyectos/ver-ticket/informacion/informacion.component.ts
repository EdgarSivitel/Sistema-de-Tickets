import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  EsSoporte:boolean;
  nombre: string;
  ubicacion: string;
  fechaHoy: string;
  empresa:string;
  problema: string;
  telefono: string
  comentarios:string;
  idUsuario;
  folio:string;
  estatus:string;
  encargado:string;


  
  constructor(private usuarioService:UsuarioService,private ticketService:TicketService) {

    this.problema="";
    this.nombre="";
    this.ubicacion="";
    this.comentarios="";
    this.telefono="";
   }

  ngOnInit(): void {
    

    this.ticketService.ObtenerTicketbyID(localStorage.getItem("idTicket")).subscribe((data:Ticket)=>{
      this.problema=data.reporte;
      this.comentarios=data.comentarios;
      this.telefono=data.telefono;
     // this.nombre=data.solicitante;
      this.folio=data._id;
      this.fechaHoy=data.fechaInicio;
      this.estatus=data.estatus;


      this.usuarioService.ObtenerUsuarioByID(data.solicitante).subscribe((data1:Usuario)=>{
        if(data._id!="Error"){
         
          this.nombre=data1.nombre;
          this.ubicacion=data1.ubicacion;
          this.empresa=data1.empresa;
        }
      });

      if(data.encargado!=null){
        
      this.usuarioService.ObtenerUsuarioByID(data.encargado).subscribe((data3:Usuario)=>{
        if(data3._id!="Error"){
         
          this.encargado=data3.nombre;
          
        }
      });
      }

    });

    


    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((userInfo:Usuario)=>{
      if(userInfo._id!="Error"){
        
        if(userInfo.tipo==3){
          this.EsSoporte=true;
        }else{
          this.EsSoporte=false;
        }
      }
    });
  }





























}
