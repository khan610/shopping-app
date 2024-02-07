import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://panlasangpinoy.com/wp-content/uploads/2023/10/tofu-and-broccoli-stir-fry-750x750.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://panlasangpinoy.com/wp-content/uploads/2023/10/tofu-and-broccoli-stir-fry-750x750.jpg'
    ),
  ];
}
