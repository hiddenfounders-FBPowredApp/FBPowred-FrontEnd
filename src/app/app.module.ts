import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {RoutingAppModule} from "./app.routing";
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    AuthentificationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
