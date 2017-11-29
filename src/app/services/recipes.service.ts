import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Panqueques', 'Deliciosos Panqueques!!','http://images.media-allrecipes.com/userphotos/720x405/705316.jpg', [
      new Ingredient('Miel', 2),
      new Ingredient('Mantequilla', 1)
    ]),
    new Recipe(2, 'Pollo en Salsa', 'Pollo en Salsa roja con pasta','http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg', [
      new Ingredient('Pollo', 1),
      new Ingredient('Salsa', 2)
    ])
  ];

  updateRecipes = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService, private http: Http) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    // const recipeSelected = this.recipes[+name];
    const recipeSelected = this.recipes.find(recipe => recipe.id === id);
    return recipeSelected;
  }

  getRecipesDB(recipes: Recipe[]) {
    this.recipes = [];
    this.recipes = recipes;
   
    this.updateRecipes.next();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addToShoppingList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    const id = this.recipes.length + 1;
    recipe.id = id;
   
    this.recipes.push(recipe);
    this.updateRecipes.next();

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes.map((item,idx)=>{
      if (this.recipes[idx].id == index) {
        this.recipes[idx] = newRecipe;
        this.recipes[idx].id = index;
      }
    })
    this.updateRecipes.next();

  }

  deleteRecipeIngredients(index: number) {
    let indexFound = this.recipes.findIndex(item=> item.id == index);
    this.recipes[indexFound].ingredients = [];
    console.log(this.recipes[indexFound])
    // this.updateRecipes.next();
  }

  deleteRecipe(index: number) {
    let indexFound = this.recipes.findIndex(item => item.id == index);
    this.recipes.splice(indexFound,1);
    this.updateRecipes.next();
  }
}
