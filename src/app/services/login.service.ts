import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth : AngularFireAuth) { }

  Login(form){
    return new Promise((resolve, rejected) =>{
      this.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(user => {
        resolve(user);
      })
      .catch(error => rejected(error));
    })
  }
  
  Logout(){
    this.auth.signOut();
  }
}
