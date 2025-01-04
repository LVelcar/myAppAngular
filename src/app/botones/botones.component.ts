import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  constructor() { }

  ngOnInit(): void {
  }

  // Variables
  img: string = 'https://images.pexels.com/photos/29849903/pexels-photo-29849903/free-photo-of-madeira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

  // Funciones
  cambiarImagen(){
    this.img = 'https://images.pexels.com/photos/29879149/pexels-photo-29879149/free-photo-of-majestuosa-ola-rompiendo-en-la-playa-de-iquique.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';  
  }

  cambiarImagen2(){
    this.img = 'https://images.pexels.com/photos/29987001/pexels-photo-29987001/free-photo-of-una-torre-zabeel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  }
}
