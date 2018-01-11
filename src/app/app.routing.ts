import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MunicipioListComponent } from "./component/municipio-list.component"
import { MunicipioEditComponent } from "./component/municipio-edit.component"
import { MunicipioEditResolver } from "./resolver/municipio-edit.resolver"
import { MunicipioNewResolver } from "./resolver/municipio-new.resolver"
import { MunicipioCloneResolver } from "./resolver/municipio-clone.resolver"


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
        path: 'municipio/novo',
        component: MunicipioEditComponent,
        resolve: {
            municipioResolver: MunicipioNewResolver
        }
    },
    {
        path: 'municipio/clone',
        component: MunicipioEditComponent,
        resolve: {
            municipioResolver: MunicipioCloneResolver
        }
    },
    {
        path: 'municipio/:id',
        component: MunicipioEditComponent,
        resolve: {
            municipioResolver: MunicipioEditResolver
        }
    }
];

export const routing = RouterModule.forRoot(appRoutes);