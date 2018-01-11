import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./component/app.component";
import { routing } from "./app.routing";

import { MunicipioListComponent } from "./component/municipio-list.component"
import { MunicipioEditComponent } from "./component/municipio-edit.component"
import { MunicipioService } from "./service/municipio-service.omponent"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        MunicipioListComponent,
        MunicipioEditComponent
    ],
    providers: [
        MunicipioService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}