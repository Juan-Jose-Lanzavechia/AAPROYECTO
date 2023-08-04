import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion:Educacion[]=[]; //Acá queda importado el MODEL

  //En el constructor vamos a importar el SERVICE  de "educacion" y de "token"
  constructor(private educacionS: EducacionService, private tokenService:TokenService) {}
  isLogged= false;

  ngOnInit(): void {   
    this.cargarEducacion(); //Aquí estamos llamando al método de abajo "cargarEducacion"
    if(this.tokenService.getToken()){
      this.isLogged=true; //Si se obtiene el token es igual a true
    } else {
      this.isLogged=false; 
    } //Entonces en el html, dependiendo de estos valores,vamos a validar si estamos logueados.
       //Si el valor es true, vamos a poder editar. Si es false, no nos va a mostrar nada.
  }

  //MÉTODOS
  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data=> {
        this.educacion=data;
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data=> {
          this.cargarEducacion();
        },err =>{
          alert("No se pudo eliminar");
        } 
      )
    }
  }
}
