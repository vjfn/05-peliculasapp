import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoGenero: any[] = [];

  constructor( private dataLocal: DataLocalService,
    private moviesService: MoviesService) { }



    //Funcion que se ejecuta automaticamente al cambiar de pagina
  async ionViewDidEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();

    this.pelisPorGenero( this.generos, this.peliculas);
  }



pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]  ) {


    this.favoritoGenero = [];

    generos.forEach( (genero : any) => {
      
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres?.find( genre => genre.id === genero.id );
        })
      });

    });

    console.log(this.favoritoGenero);


  }

  refreshPage() {
    // Método para refrescar la página
    this.ionViewDidEnter();
  }


}
