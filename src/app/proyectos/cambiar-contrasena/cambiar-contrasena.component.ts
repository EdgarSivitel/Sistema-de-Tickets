import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})
export class CambiarContrasenaComponent implements OnInit {
  id:string;
  contrasena: string;
  contrasena1:string;
  nombre:string;
  bandera: boolean;
  data:Usuario;
  constructor(private ruta: ActivatedRoute,private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    
    this.id = this.ruta.snapshot.params.id;
    this.usuarioService.ObtenerUsuarioByID(this.id).subscribe((data:Usuario|any)=>{
      if(data!="Error"){
        this.nombre = data.nombre;
        this.data=data;
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

  CambiarContrasena(){
    (<HTMLInputElement>document.getElementById("Spinner")).classList.remove("d-none");
    if(this.contrasena!="" && this.bandera){
      this.data.contrasena=this.contrasena;
      this.usuarioService.ActualizarUsuario(this.data).subscribe((data)=>{
      //  console.log(data);
        if(data!="Error"){
          Swal.fire({
            text: '',
            position: 'center',
            icon: 'success',
            title: 'Transacción exitosa',

            showConfirmButton: true,

          }).then(()=>{
            (<HTMLInputElement>document.getElementById("Spinner")).classList.add("d-none");
            window.location.href ="/home";
          });
          
        }else{
          Swal.fire({
            text: 'No se pudo cambiar la contraseña',
            position: 'center',
            icon: 'error',
            title: 'Error',

            showConfirmButton: true,

          }).then(()=>{
            (<HTMLInputElement>document.getElementById("Spinner")).classList.add("d-none");
          });
        }
      });
    }
  }
  revisarContrasena(){
    if(this.contrasena!=this.contrasena1){
      document.getElementById("PasswordIncorrecto").classList.remove("d-none");
      this.bandera=false;
    }else{
      document.getElementById("PasswordIncorrecto").classList.add("d-none");
      this.bandera=true;
    }
  }
}
