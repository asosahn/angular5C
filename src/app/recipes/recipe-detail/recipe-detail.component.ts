import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { ShoppingListService } from '../../services/shopping-list.service';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  // tslint:disable-next-line:max-line-length
  constructor(private recipeServices: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeServices.getRecipe(this.id);
        // console.log(params['name']);
      }
    );
  }

  toShoppingList() {
    // this.shoppingListService.addToShoppingList(this.recipe.ingredients);
    this.recipeServices.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onRecipeEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.recipe.id, 'edit'], { relativeTo: this.route });
  }

  // onDestroy() {
  //   this.routeSubs.remove;
  // }

}
