import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-ventas',
  templateUrl: './menu-ventas.component.html',
  styleUrls: ['./menu-ventas.component.scss']
})
export class MenuVentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nuevoTicket(){
    window.location.href="/nuevo-ticket";
  }
  VerTickets(){
    window.location.href='/VerTicketsVentas/1';
  }
  BuscarTicket(){
    window.location.href="/BuscarTicket";
  }
  VerArchivados(){
    window.location.href='/VerTicketsVentas/2';
  }

}
