import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {RoutingAppModule} from "./app.routing";
import {AuthentificationFormComponent} from './authentification-form/authentification-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    AuthentificationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingAppModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
