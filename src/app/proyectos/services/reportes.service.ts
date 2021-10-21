import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporteN } from '../interface/reporte';

import {servidor} from './servidorURL';

@Injectable({
  providedIn: 'root'
})


export class ReportesService {

  constructor(private http: HttpClient) { }

  ObtnerReportesById(idTicket:string){
    return this.http.get("http://"+servidor+":4000/ObtnerReportesById?idTicket="+idTicket);
  }
  RegistrarReporte(data:ReporteN){
    return this.http.post("http://"+servidor+":4000/RegistrarReporte",{data:data});
  }
}
