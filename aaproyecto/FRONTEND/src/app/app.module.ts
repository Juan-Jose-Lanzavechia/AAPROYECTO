import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArComponent } from './components/logo-ar/logo-ar.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; 
import { RouterModule, Routes } from '@angular/router';

//PROBANDO RUTEAR GUIADO DE UN VIDEO DE YOUTUBE DE PÍLDORAS INFOORMÁTICAS

const appRoutes: Routes= [
{path:'', component:HomeComponent}, 
{path:'login',component:LoginComponent},
{path:'educacion',component:EducacionComponent},
{path:'experiencia',component:ExperienciaComponent},
{path:'acerca-de',component:AcercaDeComponent}

]

//HASTA ACÁ, LO DE PÍLDORAS INFORMÁTICAS
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}), 
    HttpClientModule,
    RouterModule.forRoot(appRoutes) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
