import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public productoService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametos =>{
      // console.log(parametos['id']);
      this.productoService.getProducto(parametos['id'])
        .subscribe( (producto: ProductoDescripcion) =>{
          this.producto = producto;
          this.id = parametos['id'];
      });
    });
  }

}
