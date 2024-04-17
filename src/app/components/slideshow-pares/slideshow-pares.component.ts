import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent  implements OnInit {

  slides: any = 3
  @Input() peliculas: Pelicula[] = [];

  @Output() cargarMas = new EventEmitter();

  constructor(private modalController: ModalController) { }


  ngOnInit() {}

  onClick() {
    this.cargarMas.emit(() => {
      
    });
    const swiperEl: any = document.querySelector('swiper-container');
    const buttonEl = document.getElementById('botonmas');
    //console.log(swiperEl)
    swiperEl.swiperParams.slidesPerView = 3
    
    // buttonEl.addEventListener('click', () => {
    //   // if it was initialized with attributes
    //   swiperEl.setAttribute('slides-per-view', '3');
    //   console.log(buttonEl)

    //   // or if it was initialized with props
    //   swiperEl.slidesPerView = 3;
    // });
    if(swiperEl){

        console.log('boton', swiperEl)
    }
    
      // console.log(swiperEl)
  }

  async verDetalle(id:any){
    const  modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();

  }

}
