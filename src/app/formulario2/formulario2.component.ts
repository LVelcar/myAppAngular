import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component implements OnInit {

  // Variables
  persona = {
    nombre: '',
    edad: '',
  };

  // Metodos
  enviarFormulario() {
    console.log(this.persona);
  }

  // Constructor
  constructor() { }

  ngOnInit(): void {
  }

}
