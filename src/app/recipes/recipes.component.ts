import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipesService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

  ngOnDestroy() {
    // this.recipesService.recipeSelected.unsubscribe();
  }
  // onClickedItemDetail(recipe: Recipe) {
  //  this.selectedRecipe = recipe;

  // }

}
