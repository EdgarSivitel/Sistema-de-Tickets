import { Component, OnInit,Input } from '@angular/core';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 // constructor(private modalService: NgbModal) { }
  constructor() { }
  ngOnInit(): void {
  }

  Open(){
    window.location.href="/home";
    //const modalRef = this.modalService.open(MenuProductosComponent);
  }
}
