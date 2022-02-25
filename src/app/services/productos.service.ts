import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInt } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductosInt[] = [];
  productoFiltrado: ProductosInt[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(
          'https://base-datos-curso-angular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://base-datos-curso-angular-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
    //this.productoFiltrado = this.productos.filter((producto) => {return true;});
    //console.log(this.productoFiltrado);
  }
  private filtrarProductos(termino: string) {
    //console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach((prod: any) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
