import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ar',
  templateUrl: './logo-ar.component.html',
  styleUrls: ['./logo-ar.component.css']
})
export class LogoArComponent implements OnInit{
  isLogged=false;

  constructor(private router:Router, private tokenService:TokenService){ }

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged=true;// Si se obiene es porque estamos logueados. Si no isLogged es igual a false
    } else {
      this.isLogged=false;
    } //Es decir si no obtengo el token, no estoy conectado
  }
  
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])  
  }
}
