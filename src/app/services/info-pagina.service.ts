import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInt } from '../interfaces/info-pagina.interface';
import { EquipoInt } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPaginaInt = {};
  cargada = false;
  equipo: EquipoInt = {};

  constructor(private http: HttpClient) {
    // console.log("Info Pagina");

    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo() {
    //leer el archivo json
    this.http
      .get('/assets/data/data-pagina.json')
      .subscribe((resp: InfoPaginaInt) => {
        this.cargada = true;
        this.info = resp;
      });
  }
  private cargarEquipo() {
    this.http
      .get(
        'https://base-datos-curso-angular-default-rtdb.europe-west1.firebasedatabase.app/equipo.json'
      )
      .subscribe((resp: EquipoInt) => {
        this.cargada = true;
        this.equipo = resp;

        console.log(resp);
      });
  }
}
