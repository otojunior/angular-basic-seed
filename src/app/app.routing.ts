import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MunicipioListComponent } from "./component/municipio-list.component"
import { MunicipioEditComponent } from "./component/municipio-edit.component"


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'municipio',
        pathMatch: 'full'
    },
    {
        path: 'municipio',
        component: MunicipioListComponent
    },
    {
        path: 'municipio/:id',
        component: MunicipioEditComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);