import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-soporte',
  templateUrl: './menu-soporte.component.html',
  styleUrls: ['./menu-soporte.component.scss']
})
export class MenuSoporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TicketsPendientes(){
    window.location.href="/TicketsPendientes";
  }
  MisTickets(){
    window.location.href='/MisTickets/1';
  }
  BuscarTicket(){
    window.location.href="/MisTickets/2";
  }
}
