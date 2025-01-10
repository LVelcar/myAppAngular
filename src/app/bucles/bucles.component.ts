import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit {

  personas: Persona[] = [
    {nombre: 'Juan', apellido: 'Gonzalez' , edad: 20},
    {nombre: 'Ana', apellido: 'Olachea' , edad: 30},
    {nombre: 'Pedro', apellido: 'Juarez' , edad: 40},
    {nombre: 'Maria', apellido: 'Contreras' , edad: 50},
    {nombre: 'Luis', apellido: 'Velcar' , edad: 60}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
