import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario:string;
  correo:string;
  direccion:string;
  empresa: string;
  tipo:string;
  nombre:string;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.ObtenerUsuarioByID(localStorage.getItem("idUsuario")).subscribe((data:Usuario)=>{
      if(data._id!="Error"){
        this.usuario=data.usuario;
        this.correo=data.correo;
        this.direccion=data.ubicacion;
        this.empresa=data.empresa;
        this.nombre = data.nombre;
        let tipoUsuario ={
          1:"Cliente",
          2:"Ventas",
          3:"Soporte",
          4:"Administración"
        };
        this.tipo=tipoUsuario[data.tipo];
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
}
