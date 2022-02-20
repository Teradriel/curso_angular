import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInt } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPaginaInt = {};
  cargada = false;

  constructor(private http: HttpClient) {
    // console.log("Info Pagina");

    //leer el archivo json
    this.http
      .get('/assets/data/data-pagina.json')
      .subscribe((resp: InfoPaginaInt) => {
        this.cargada = true;
        this.info = resp;

        console.log(resp);
      });
  }
}
