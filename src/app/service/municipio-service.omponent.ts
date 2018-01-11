import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Municipio } from "../model/municipio.model";

@Injectable()
export class MunicipioService {
    constructor(private httpclient: HttpClient) { }

    public getMunicipios(): Observable<Municipio[]> {
        return this.httpclient.get<Municipio[]>("municipios.json");
    }

    public getMunicipio(id: number): Observable<Municipio> {
        console.log("Arquivo JSON chamado: " + `municipios.${id}.json`);
        return this.httpclient.get<Municipio>(`municipios.${id}.json`);
    }
}