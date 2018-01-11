import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MunicipioListComponent } from "./component/municipio-list.component"

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'municipio',
        pathMatch: 'full'
    },
    {
        path: 'municipio',
        component: MunicipioListComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);