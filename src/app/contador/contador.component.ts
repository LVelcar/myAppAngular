import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador', 
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit { 
  constructor() { }
  ngOnInit(): void { }

  // Variables
  numero: number = 1;

  // Métodos

  // Método para decrementar el valor de la variable numero
  decrement() {
    this.numero--;
  }

  // Método para incrementar el valor de la variable numero
  increment() {
    this.numero++;
  }
}