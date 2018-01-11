import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router"

import { Municipio } from "../model/municipio.model";
import { MunicipioService } from "../service/municipio-service.omponent";

@Injectable()
export class MunicipioEditResolver implements Resolve<Municipio> {
    constructor(private service: MunicipioService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        let id = parseInt(route.paramMap.get('id'));
        return this.service.getMunicipio(id);
    }
}