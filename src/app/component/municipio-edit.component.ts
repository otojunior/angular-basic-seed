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
        this.router.params.subscribe(
            params => {
                let id = params['id'];
                this.service.getMunicipio(id).subscribe(
                    municipio => {
                        this.municipio = municipio;
                        console.log("Service voltou: " + JSON.stringify(municipio));
                    },
                    erro => console.log(erro)
                )
            }
        )
    }
}