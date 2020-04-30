import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parametros } from './parametros';

const API_URL = 'api/';

@Injectable({
    providedIn: 'root'
})
export class ParamService {

    constructor(private http: HttpClient) {}

    add(newParams: Parametros) {
        return this.http.post<Parametros>(API_URL + 'parameters/create', newParams);
    }

    getParametrosList(){
        return this.http.get<Parametros[]>(API_URL + "parameters/");
    }

    delete(id:Number){
       // return this.http.delete(API_URL + "parameters" + id, { responseType: 'text' });
    }
   
}