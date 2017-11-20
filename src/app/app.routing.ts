import {RouterModule, Routes} from "@angular/router";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthentificationFormComponent} from "./authentification-form/authentification-form.component";

const appRoutes: Routes = [
    {path: 'register', component: RegisterFormComponent },
    {path: '', component: AuthentificationFormComponent }
  ];

export const RoutingAppModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
