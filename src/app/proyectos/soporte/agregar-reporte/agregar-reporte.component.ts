import { Component, OnInit } from '@angular/core';
import { Reporte, ReporteN } from '../../interface/reporte';
import { Ticket } from '../../interface/ticket';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReportesService } from '../../services/reportes.service';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-agregar-reporte',
  templateUrl: './agregar-reporte.component.html',
  styleUrls: ['./agregar-reporte.component.scss']
})
export class AgregarReporteComponent implements OnInit {

 
  EsDePendientes:boolean;
  constructor(private usuarioService:UsuarioService,private ticketService:TicketService, private reporteService:ReportesService) { }
  reporte:string;
  folio:string;
  problema: string;
  data:Ticket;
  reportesList:Reporte[];
  EsFinalizado: boolean;
  ngOnInit(): void {
    this.iniciarPagina()
  }

  Regresar() {
    if (this.EsDePendientes) {
      window.location.href = "/DetallesTicket";
    } else {
      window.location.href = "/DetallesTicket";
    }
  }

  iniciarPagina() {


    this.EsDePendientes=(localStorage.getItem("EsDePendientes")=="true"?true:false);
    this.ticketService.ObtenerTicketbyID(localStorage.getItem("idTicket")).subscribe((data: Ticket) => {
      this.problema = data.reporte;
      this.EsFinalizado = data.estatus=="Finalizado"?true:false;
      this.folio=data._id;
      this.data = data;
      

     


    });
    this.reporteService.ObtnerReportesById(localStorage.getItem("idTicket")).subscribe((data:Reporte[]|any) => {
      this.reportesList=<Reporte[]>data;
      //console.log(this.reportesList);
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

  ObtenerFecha(){
    let fechaHoy=new Date();
    let fecha=(fechaHoy.getDate()/10>0?fechaHoy.getDate():"0"+fechaHoy.getDate())+"-"+((fechaHoy.getMonth()+1)/10==0?fechaHoy.getMonth()+1:"0"+(fechaHoy.getMonth()+1))+"-"+fechaHoy.getFullYear();
    
    return fecha;
  }

  AgregarReporte(){
    let reporte:ReporteN={
      ticket:this.folio,
      usuario:localStorage.getItem("idUsuario"),
      reporte:this.reporte,
      fecha:this.ObtenerFecha()
    }
    this.reporteService.RegistrarReporte(reporte).subscribe((data)=>{
        if(data=="Error"){
          Swal.fire({  
            text: 'Error al registrar',
            position: 'center',  
            icon: 'error',  
            title: 'Error',  
           
            showConfirmButton: true,  
            
        });
      }else{
        this.reporte="";
        this.reporteService.ObtnerReportesById(localStorage.getItem("idTicket")).subscribe((data:Reporte[]|any) => {
          this.reportesList=<Reporte[]>data;
        //  console.log(this.reportesList);
        });
      }
    });
  }
  FinalizarTrabajo(){


    Swal.fire({
      text: '¿Seguro que desea finalizar trabajo?',
      position: 'center',
      icon: 'warning',
      title: 'Precaución',

      showConfirmButton: true,
      confirmButtonText: `Si`,
      showCancelButton: true,
      CancelButtonText: 'No',

    }).then((result) => {
      
      if (result.isConfirmed) {
        this.data.estatus="Finalizado";
        this.ticketService.ActulizarTicket(this.data).subscribe((data)=>{
        //  console.log(data);
          Swal.fire('Finalizado!', '', 'success');
          window.location.href = "/MisTickets/1";
         });
        
      } 
    });;



    





   
   //window.location.href = "/MisTickets";
  }
  
}
