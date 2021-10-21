import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, UsuarioN } from '../interface/usuario';
import { servidor } from './servidorURL';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

   registrar(data:UsuarioN) {
   return   this.http.post("http://"+servidor+":4000/NuevoUsuario",{data:data});
  }


  obtenerUsuarios(){
    return this.http.get("http://"+servidor+":4000/ObtenerUsuarios");
  }


  login(correo:string, password:string,tipo:number){
    
    return this.http.get("http://"+servidor+":4000/Login?correo="+correo+"&tipo="+tipo);
    
  }

  ObtenerUsuarioByID(id:string){
    return this.http.get("http://"+servidor+":4000/UsuarioByID?idUsuario="+id);
  }

  RecuperarConntrasena(correo:string){
    return this.http.get("http://"+servidor+":4000/CambiarContrasena?correo="+correo);
  }
  VerificarCorreo(correo:string){
    return this.http.get("http://"+servidor+":4000/VerificarCorreo?correo="+correo);
  }
  EnviarCorreo(correo:string){
    return this.http.get("http://"+servidor+":4000/EnviarCorreo?correo="+correo);
  }
  ActualizarUsuario(data:Usuario){
    return this.http.put("http://"+servidor+":4000/ActualizarUsuario",{data:data});
  }

}
