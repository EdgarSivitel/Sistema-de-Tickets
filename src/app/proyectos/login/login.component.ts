import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Usuario } from '../interface/usuario';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  correo: string;
  contrasena: string;
  recordar: boolean;
  constructor(private usuarioService: UsuarioService) {
    this.correo = "";
    this.contrasena = "";
    this.recordar = false;
  }

  ngOnInit(): void {


    
    if (document.cookie != void (0)) {



      let cookies = document.cookie.split(" ");
      //console.log(cookies[2]);


      if (cookies[2].includes("true")) {
        this.correo = cookies[0].split("=")[1];
        this.contrasena = cookies[1].split("=")[1];
        (<HTMLInputElement>document.getElementById("exampleCheck1")).checked = true;
      }
    }
  }

  iniciarSesion() {



    let tipo: number;

    if (this.correo !== "" && this.contrasena != "") {
   //   console.log(this.correo + " " + this.contrasena);
      if (this.correo.includes("@")) {
        tipo = 2;
      } else {
        tipo = 1;
      }




      this.usuarioService.login(this.correo, this.contrasena, tipo).subscribe((data: any | Usuario) => {
      //  console.log(data);
        if (data == "Error" || data == null) {
          Swal.fire({
            text: 'Usuario incorrecto',
            position: 'center',
            icon: 'error',
            title: 'Error',

            showConfirmButton: true,

          });
        } else {
          if (data.contrasena == this.contrasena) {

            if ((<HTMLInputElement>document.getElementById("exampleCheck1")).checked) {
              document.cookie = "usuario=" + this.correo + " contraseña=" + this.contrasena + " recordar=" + true + ";";
            }


            localStorage.setItem("idUsuario", data._id);
            localStorage.setItem("tipo", data.tipo);
          //  console.log(data);
            //alert(data.verificado);
            if (!data.verificado) {
              Swal.fire({
                text: 'Revise su correo',
                position: 'center',
                icon: 'warning',
                title: 'Aún no se encuentra verificado su correo',

                showConfirmButton: true,

              }).then(() => {
                window.location.href = "/menu";
              });

            } else {
              window.location.href = "/menu";
            }

            // console.log(document.cookie);

          } else {
            Swal.fire({
              text: 'Contraseña incorrecta',
              position: 'center',
              icon: 'error',
              title: 'Error',

              showConfirmButton: true,

            });
          }
        }
      });
    }
    //alert((<HTMLInputElement>document.getElementById("exampleCheck1")).checked);






    // window.location.href="/menu";
  }
  cambioCheck() {
    if (!(<HTMLInputElement>document.getElementById("exampleCheck1")).checked) {
      document.cookie = document.cookie + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
  }

  VerificarCaracteres(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.iniciarSesion();
    }
  }
}
