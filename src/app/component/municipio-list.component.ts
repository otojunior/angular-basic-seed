import { Component, OnInit } from "@angular/core";

import { Municipio } from "../model/municipio.model"
import { MunicipioService } from "../service/municipio-service.omponent"

@Component({
    selector: "lista-municipios",
    templateUrl: "./municipio-list.component.html"
})
export class MunicipioListComponent implements OnInit {
    public municipios: Municipio[];

    constructor(private service: MunicipioService) {
    }

    ngOnInit() {
        // this.municipios = Array.of(
        //     new Municipio(1, "Belo Horizonte", "30000", "xxxx", 2000000),
        //     new Municipio(2, "Contagem", "31000", "yyyy", 1000000),
        //     new Municipio(3, "Ribeirão das Neves", "32000", "zzzz", 450000),
        //     new Municipio(4, "Esmeraldas", "33000", "aaaaa", 200000),
        //     new Municipio(5, "Ibirité", "34000", "bbbb", 150000),
        // );

        let observ = this.service.getMunicipios();
        observ.subscribe(
            municipios => this.municipios = municipios,
            error => console.log(error)
        );
    }
}