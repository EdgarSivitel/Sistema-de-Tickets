import { Component, OnInit } from '@angular/core';
import { UsuarioN,Usuario } from '../interface/usuario';
import {UsuarioService} from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  nombre: string;
  empresa: string;
  tipoUsuarioS: string;
  tipoUsuarioN: number;
  direccion: string;
  correo: string;
  usuario: string;
  contrasena: string;
  contrasena1:string;

  constructor(private usuarioService:UsuarioService) { 
    this.nombre ="";
    this.empresa ="";
    this.tipoUsuarioS="1";
    this.tipoUsuarioN =0;
    this.direccion="";
    this.correo="";
    this.usuario="";
    this.contrasena="";
    this.contrasena1="";
  }

  ngOnInit(): void {




  }

  revisarContrasena(){
    if(this.contrasena!=this.contrasena1){
      document.getElementById("PasswordIncorrecto").classList.remove("d-none");
    }else{
      document.getElementById("PasswordIncorrecto").classList.add("d-none");
    }
  }
  async registrar() {

    

    if(this.nombre =="" || this.tipoUsuarioS=="" || this.correo == "" || this.usuario=="" || this.contrasena==""){
      document.getElementById("DatosIncompletos").classList.remove("d-none");
    }else{
      document.getElementById("DatosIncompletos").classList.add("d-none");

      if(!this.correo.includes("@")){
        document.getElementById("CorreoIncorrecto").classList.remove("d-none");
      }else{
        document.getElementById("CorreoIncorrecto").classList.add("d-none");
      }


      let usuarioData :UsuarioN= {
        nombre:this.nombre,
        empresa:this.empresa,
        tipo:Number(this.tipoUsuarioS),
        ubicacion:this.direccion,
        correo:this.correo,
        usuario:this.usuario,
        contrasena:this.contrasena
      }
  
  
  //    console.log(usuarioData);
      let respuesta;
      this.usuarioService.registrar(usuarioData).subscribe((data:any) =>{ 
        if(data.idUsuario=="Error"){
          Swal.fire({  
            position: 'center',  
            icon: 'error',  
            title: 'Error',  
            showConfirmButton: true,  
            
          });  
        }else{
          Swal.fire({  
            position: 'center',  
            icon: 'success',  
            title: 'Registro correcto', 
            text:"Favor de revisar su correo para confirmarlo", 
            showConfirmButton: true,  
            confirmButtonText: 'OK', 
          }).then(() => { window.location.href="/login"});  
        }
      });

    }




    

    
  }


  revisarUsuario(){
    let bandera=false;
    this.usuarioService.obtenerUsuarios().subscribe(data =>{
      let data1:Usuario[] | any=data;
      data1.forEach((element:Usuario) => {
        if(this.usuario==element.usuario){
            bandera=true;
        }
      });
      if(bandera){
        
        document.getElementById("UsuarioExistente").classList.remove("d-none");
      }else{
        document.getElementById("UsuarioExistente").classList.add("d-none");
      }
     
    })
  }


  VerificarTipoUsuario(){
    if(this.tipoUsuarioS=="3" || this.tipoUsuarioS=="2"){
      this.empresa="SIVITEL";
      this.direccion="El Bajío # 117 Col. San Ignacio, Ags. C. P. 20326.";

    }else{
      this.empresa="";
      this.direccion="";
    }
  }
}
