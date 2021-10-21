import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporteN } from '../interface/reporte';
@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(private http: HttpClient) { }


 verificarCaptcha(token){
   
  let body:string="secret=6Ld2yqcbAAAAADhi_-DuzOG_6YjiVVB2yJT3vN_X&response="+token+"";
  let resutl = this.http.post("/captchaURL?"+body,{});

  
  
  return resutl;
 }
  
}
