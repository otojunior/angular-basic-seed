import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"

import { Municipio } from "../model/municipio.model";
import { MunicipioService } from "../service/municipio-service.omponent";

@Injectable()
export class MunicipioNewResolver implements Resolve<Municipio> {
    constructor(private service: MunicipioService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.newMunicipio();
    }
}