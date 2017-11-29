import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Components Added
import { HeaderComponent } from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighLightDirective } from './Directives/basic-highlight.directive';
import { BetterHighLightDirective } from './Directives/better-high-light.directive';
import { UnlessDirective } from './Directives/unless.directive';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { RecipesService } from './services/recipes.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from './app-routing.routes';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesService } from './services/recipes.service';
import { DataStorageService } from './services/data-storage.service';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.services';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping-list/shopping.module';
// import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    UnlessDirective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // SignupComponent,
    // SigninComponent,
    

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpModule,
    // HeaderModule,
    RecipesModule,
    ShoppingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ShoppingListService, 
    RecipesService, 
    DataStorageService, 
    AuthGuard, 
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
