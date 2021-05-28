import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectedRecipeComponent } from './pages/selected-recipe/selected-recipe.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ConfigComponent } from './pages/config/config.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { CompletePageComponent } from './components/complete-page/complete-page.component';

// Angular Fire

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipesComponent,
    ShoppingListComponent,
    SelectedRecipeComponent,
    CalendarComponent,
    ConfigComponent,
    StepsComponent,
    StepTemplateComponent,
    FormWizardComponent,
    CompletePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Angular Fire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
