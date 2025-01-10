import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'], 
})
export class FormularioComponent implements OnInit {
  // Variables
  openAlert: boolean = false;


  constructor() {}

  ngOnInit(): void {}

  // Método para visualizar datos en consola.
  showName(name: string): void {
    console.log('Hola ' + name);
    this.openAlert = true;
  }

  // Método para cerrar el alert.
  closeAlert(): void {
    this.openAlert = false;
  }
}
