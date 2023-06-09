import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL='http://localhost:8080/auth/'; //Este es el mismo  endpoint que hicimos en el backend
  
  constructor(private httpClient:HttpClient) { } //Para que cuando llamemos a localhost nos redireccione
  
  public nuevo(nuevoUsuario:NuevoUsuario):Observable <any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  } 

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario)
  }
 /* fetchData(){
    return this.httpClient.get("http://localhost:8080/auth/");
  } 
 */
}
