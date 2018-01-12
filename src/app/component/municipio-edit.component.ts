import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Municipio } from "../model/municipio.model";
import { MunicipioService } from "../service/municipio-service.omponent";


@Component({
    selector: "edita-municipios",
    templateUrl: "./municipio-edit.component.html"
})
export class MunicipioEditComponent implements OnInit {
    public municipio: Municipio;

    constructor(
        private router: ActivatedRoute,
        private service: MunicipioService
    ) { }

    ngOnInit() {
        this.municipio = this.router.snapshot.data["municipioResolver"];
    }

    public saveMunicipio(): void {
        this.service.saveMunicipio(this.municipio);
    }
}