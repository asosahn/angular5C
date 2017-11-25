import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../../services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() onClickedItem = new EventEmitter<void>();
  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  onClicked() {
    // this.recipesService.recipeSelected.emit(this.recipe);
    // this.onClickedItem.emit();
    // this.router.navigate(['/recipes', this.recipe.name ], {relativeTo: this.route});
    this.router.navigate(['/recipes', this.recipe.id ], {relativeTo: this.route});
  }

}
