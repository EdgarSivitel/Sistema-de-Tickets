import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { RecaptchaService } from '../services/recaptcha.service';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-recuperar-contasena',
  templateUrl: './recuperar-contasena.component.html',
  styleUrls: ['./recuperar-contasena.component.scss']
})
export class RecuperarContasenaComponent implements OnInit {

  tokenD: string;
  correo:string;
  correo1:string;
  bandera:boolean;
  constructor( private recaptchaV3Service: ReCaptchaV3Service,private captchaService:RecaptchaService, private usuarioService:UsuarioService) {
    this.tokenD="";
    this.correo="";
    this.correo1="";
    this.bandera=false;
   }

  ngOnInit(): void {
    this.recaptchaV3Service.execute("importantAction").subscribe((token)=>{
      this.tokenD=token;
      //console.log(token);
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

  recuperarContrasena(){
    (<HTMLInputElement>document.getElementById("Spinner")).classList.remove("d-none");

   //(this.tokenD);
    if(this.tokenD!="" && this.bandera){
      this.captchaService.verificarCaptcha(this.tokenD).subscribe((data:any)=>{
      //  console.log(data);
       


        if(data.success){



          if(this.correo!="" ){
            this.usuarioService.VerificarCorreo(this.correo).subscribe((data:any)=>{
              (<HTMLInputElement>document.getElementById("Spinner")).classList.add("d-none");
              //console.log(data);
              if(data!="Error" && data!="" && data!=null){

                this.usuarioService.EnviarCorreo(this.correo).subscribe((data:any)=>{
                  Swal.fire({
                    text: 'Revice su correo',
                    position: 'center',
                    icon: 'info',
                    title: 'Se envió correo para recuperación',
        
                    showConfirmButton: true,
        
                  });
                });
                
              }else{
                Swal.fire({
                  text: 'Correo no encontrado',
                  position: 'center',
                  icon: 'error',
                  title: 'Error',
      
                  showConfirmButton: true,
      
                });
              }
            });
          }

        }else{
          Swal.fire({
            text: 'Intente recargargar la página',
            position: 'center',
            icon: 'warning',
            title: 'Alerta de Captcha',

            showConfirmButton: true,

          });
          (<HTMLInputElement>document.getElementById("Spinner")).classList.add("d-none");
        
        }
      });

    }

    
    



  }
  revisarCorreo(){
    if(this.correo!=this.correo1){
      (<HTMLInputElement>document.getElementById("correoIncorrecto")).classList.remove("d-none");
      this.bandera=false;     
    }else{
      (<HTMLInputElement>document.getElementById("correoIncorrecto")).classList.add("d-none");
      this.bandera=true;
    }
  }
}
