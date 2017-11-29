import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  token: string;
  isAuth = new Subject<string>();
  constructor(private router: Router) { }

  ngOnInit() {
   
  
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(err=>console.log(err));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
      firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          this.token = token;
          this.router.navigate(['/'])
        }
      )
    })
    .catch(
      error => console.log(error)
    )
  }

  getToken() {
    firebase.auth().currentUser.getToken()
    .then(
      (token: string) => {
        this.token = token;
        this.isAuth.next(this.token);
      }
    )
    return this.token;
    
  }

  getTokenPromise() {
    return firebase.auth().currentUser.getIdToken()
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/'])
  }
}
