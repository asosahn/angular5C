import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('Panqueques', 'Deliciosos Panqueques!!','http://images.media-allrecipes.com/userphotos/720x405/705316.jpg'),
  //   new Recipe('Pollo en Salsa', 'Pollo en Salsa roja con pasta','http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg')
  // ];

  recipes: Recipe[];
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute ) {

  }
  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  // onRecipeSelected(recipe: Recipe) {

  //   this.recipeSelected.emit(recipe);
  // }

}
