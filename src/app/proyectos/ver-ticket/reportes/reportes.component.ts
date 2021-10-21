import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../interface/reporte';
import { Ticket } from '../../interface/ticket';
import { Usuario } from '../../interface/usuario';
import { ReportesService } from '../../services/reportes.service';
import { TicketService } from '../../services/ticket.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  reportesList:Reporte[];
  folio:string;
  problema: string;

  constructor(private reporteService:ReportesService,private ticketService:TicketService) { }

  ngOnInit(): void {
    
    this.ticketService.ObtenerTicketbyID(localStorage.getItem("idTicket")).subscribe((data:Ticket|any)=>{
      if(data!="Error"){
        this.folio=data._id;
        this.problema=data.reporte;
      }
    });

    this.reporteService.ObtnerReportesById(localStorage.getItem("idTicket")).subscribe((data:Reporte[]|any) => {
      if(data!="Error"){
        this.reportesList=data;
      }
    })
    
  }

}
