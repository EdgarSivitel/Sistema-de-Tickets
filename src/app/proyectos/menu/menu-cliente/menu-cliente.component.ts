import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss']
})
export class MenuClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoTicket(){
    window.location.href="/nuevo-ticket";
  }
  VerTicket(){
    window.location.href='/VerTickets/1';
  }
  BuscarTicket(){
    window.location.href="/BuscarTicket";
  }
  VerArchivados(){
    window.location.href='/VerTickets/2';
  }
}
