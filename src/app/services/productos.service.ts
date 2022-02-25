import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInt } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: any[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get(
        'https://base-datos-curso-angular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
      )
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://base-datos-curso-angular-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }
}
