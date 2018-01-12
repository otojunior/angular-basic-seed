import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Municipio } from "../model/municipio.model";

@Injectable()
export class MunicipioService {
    constructor(private httpclient: HttpClient) { }

    public getMunicipios(): Observable<Municipio[]> {
        return this.httpclient.get<Municipio[]>("http://localhost:8080/app/api/municipio");
    }

    public getMunicipio(id: number): Observable<Municipio> {
        return this.httpclient.get<Municipio>(`http://localhost:8080/app/api/municipio/${id}`)
    }

    public newMunicipio(): Observable<Municipio> {
        return Observable.of(new Municipio(null, null, null, null, null));
    }

    public cloneMunicipio(): Observable<Municipio> {
        // TODO: pegar o ultimo municipio
        return Observable.of(new Municipio(null, null, null, null, null));
    }

    public saveMunicipio(municipio: Municipio): void {
        this.httpclient
            .post<Municipio>('http://localhost:8080/app/api/municipio/novo', municipio)
            .subscribe(s => console.log(s));
    }

    public deleteMunicipio(id: number): void {
        this.httpclient
            .delete(`http://localhost:8080/app/api/municipio/${id}`)
            .subscribe(s => console.log(s));
    }
}