import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
import { EquipoInt } from './interfaces/equipo.interface';
import { InfoPaginaInt } from './interfaces/info-pagina.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public infoPaginaServ: InfoPaginaService,
    public ProductosService: ProductosService
  ) {}
}
