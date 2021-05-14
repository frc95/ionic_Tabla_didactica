import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {Howl, Howler} from 'howler';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  number=true;
  animales=false;
  colores=false;

  brasil=true;
  espana=false;
  eeuu=false;



  constructor(public router : Router,
    private loginSvc : LoginService,
    private loadingController : LoadingController) {}

  Colores(){
    this.number=false;
    this.animales=false;
    this.colores=true;
  }

  Numeros(){
    this.number=true;
    this.animales=false;
    this.colores=false;
  }

  Animales(){
    this.number=false;
    this.animales=true;
    this.colores=false;
  }

  Brasil(){
    this.brasil=true;
    this.espana=false;
    this.eeuu=false;
  }

  Espana(){
    this.brasil=false;
    this.espana=true;
    this.eeuu=false;
  }

  Eeuu(){
    this.brasil=false;
    this.espana=false;
    this.eeuu=true;
  }

  Logout()
  {
    let sound = new Howl({
      src: ['assets/logout/logout.mp3']
    });
    sound.play();
    this.presentLoading();
    setTimeout(() => {
        this.loginSvc.Logout();
        this.router.navigateByUrl('login');
    }, 3000);
  }

  
  //numeros
  uno(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/espanol/1.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/ingles/1.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/portugues/1.mp3']
      });
      sound.play();
    }
  }
  dos(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/espanol/2.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/ingles/2.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/portugues/2.mp3']
      });
      sound.play();
    }
  }
  tres(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/espanol/3.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/ingles/3.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/portugues/3.mp3']
      });
      sound.play();
    }
  }
  cuatro(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/espanol/4.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/ingles/4.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/portugues/4.mp3']
      });
      sound.play();
    }
  }
  cinco(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/espanol/5.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/ingles/5.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/numeros/portugues/5.mp3']
      });
      sound.play();
    }
  }
  //colores
  rojo(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/espanol/rojo.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/ingles/rojo.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/portugues/rojo.mp3']
      });
      sound.play();
    }
  }
  azul(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/espanol/azul.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/ingles/azul.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/portugues/azul.mp3']
      });
      sound.play();
    }
  }
  verde(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/espanol/verde.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/ingles/verde.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/portugues/verde.mp3']
      });
      sound.play();
    }
  }
  amarillo(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/espanol/amarillo.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/ingles/amarillo.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/portugues/amarillo.mp3']
      });
      sound.play();
    }
  }
  naranja(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/espanol/naranja.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/ingles/naranja.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/colores/portugues/naranja.mp3']
      });
      sound.play();
    }
  }

  //animales
  perro(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/espanol/perro.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/ingles/perro.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/portugues/perro.mp3']
      });
      sound.play();
    }
  }
  gato(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/espanol/gato.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/ingles/gato.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/portugues/gato.mp3']
      });
      sound.play();
    }
  }
  pajaro(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/espanol/pajaro.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/ingles/pajaro.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/portugues/pajaro.mp3']
      });
      sound.play();
    }
  }
  leon(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/espanol/leon.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/ingles/leon.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/portugues/leon.mp3']
      });
      sound.play();
    }
  }
  mono(){
    if(this.espana)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/espanol/mono.mp3']
      });
      sound.play();
    }
    else if(this.eeuu)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/ingles/mono.mp3']
      });
      sound.play();
    }
    else if(this.brasil)
    {
      let sound = new Howl({
        src: ['assets/mp3/animales/portugues/mono.mp3']
      });
      sound.play();
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circular',
      message: 'Saliendo',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  

  
  
}
