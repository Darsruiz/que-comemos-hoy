import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  //canActivate: [AmILoggedGuard]
  //pathMatch: 'full',
 {
  path: '',
  component: CalendarComponent,
  pathMatch: 'full'
},
{
  path: 'recipes',
  component: RecipesComponent
},
{
  path: 'selected-recipe',
  component: SelectedRecipeComponent
},
{
  path: 'shopping-list',
  component: ShoppingListComponent
},
{
  path: 'calendar',
  component: CalendarComponent
},
{
  path: 'config',
  component: ConfigComponent
},
//{ //if path isn't anything listed on this list ^ it will take you to this link
   //path: "**",
   //redirectTo: "MainComponent",
   //pathMatch: "full"
 //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }