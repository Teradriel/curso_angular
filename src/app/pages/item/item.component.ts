import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripInt } from '../../interfaces/producto-descripcion.interface';
import { ProductosInt } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  productos: ProductoDescripInt = {};
  id: string = 'prod-1';
  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      //console.log(parametros['id']);

      this.productoService
        .getProducto(parametros['id'])
        .subscribe((productos: ProductoDescripInt) => {
          this.id = parametros['id'];
          this.productos;
        });
    });
  }
}
