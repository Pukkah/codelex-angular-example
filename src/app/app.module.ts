import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlannerSimpleComponent} from './components/planner/planner-simple/planner-simple.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {PlannerComponent} from './components/planner/planner.component';
import {
  PlannerWithCheckboxesComponent
} from './components/planner/planner-with-checkboxes/planner-with-checkboxes.component';
import {
  PlannerWithCheckboxesAndFilterComponent
} from './components/planner/planner-with-checkboxes-and-filter/planner-with-checkboxes-and-filter.component';
import {PlannerWithDeleteComponent} from './components/planner/planner-with-delete/planner-with-delete.component';
import {FormsComponent} from './components/forms/forms.component';
import {LoginFormComponent} from './components/forms/login-form/login-form.component';
import {HttpClientModule} from "@angular/common/http";
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';
import { CharacterComponent } from './components/characters/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerSimpleComponent,
    HeaderComponent,
    PlannerComponent,
    PlannerWithCheckboxesComponent,
    PlannerWithCheckboxesAndFilterComponent,
    PlannerWithDeleteComponent,
    FormsComponent,
    LoginFormComponent,
    CharactersComponent,
    CharacterCardComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
