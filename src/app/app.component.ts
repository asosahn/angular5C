import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
// import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedFeature:string = 'recipe';
  constructor() {

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyASA2hgvCJVOfnbbye6D1fjkqCrUzVnUe4",
      authDomain: "ng-recipe-book-72cea.firebaseapp.com",
    })
    

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
