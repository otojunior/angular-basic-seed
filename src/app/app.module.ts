import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./component/app.component";
import { routing } from "./app.routing";

import { MunicipioListComponent } from "./component/municipio-list.component"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        MunicipioListComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}