import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent  implements OnInit {

  @Input() peliculas: Pelicula [] = [];
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id:any){
    const  modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });

    modal.onDidDismiss().then(() => {
      this.modalClosed.emit(); // Emite el evento cuando se cierra el modal
    });
    
    modal.present();

  }

}
