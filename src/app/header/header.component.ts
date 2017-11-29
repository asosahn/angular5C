import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { RecipesService } from '../services/recipes.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth: string;
  subscription : Subscription;
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private router: Router, private storeRecipes: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    // this.authService.tokenFnc();
    // this.subscription = this.authService.isAuth.subscribe(
    //   (token: string) => {
    //     this.auth = token;
    //   }
    // )
  }

  onSelect(feature: string) {
    console.log(feature)
    this.featureSelected.emit(feature);
  }

  saveData() {
    if (this.router.url.includes('/recipes')) {
      this.storeRecipes.storeRecipes().subscribe(
        (response: Response) => {
          console.log(response)
        },
        (err: Response) => {
          console.log(err)
        }
      )
    }
  }

  fetchData() {
    if (this.router.url.includes('/recipes')){
      this.storeRecipes.getRecipes();
    }
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
