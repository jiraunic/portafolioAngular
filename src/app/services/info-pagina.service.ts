import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

// tslint:disable-next-line: indent

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];


  constructor( private http: HttpClient ) {
  	// Leer el archivo json
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
  		.subscribe( (resp: InfoPagina ) =>{
        this.cargada = true;
        this.info = resp;
  		});
  }

  private cargarEquipo(){
    this.http.get('https://anular-html.firebaseio.com/equipo.json')
    .subscribe( (resp: any) =>{
      this.equipo = resp;
    });
  }
}
