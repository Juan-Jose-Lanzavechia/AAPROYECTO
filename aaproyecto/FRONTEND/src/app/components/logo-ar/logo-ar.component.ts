import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ar',
  templateUrl: './logo-ar.component.html',
  styleUrls: ['./logo-ar.component.css']
})
export class LogoArComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit():void{
  }

  login() {
    this.router.navigate(['/login'])  
  }
}
