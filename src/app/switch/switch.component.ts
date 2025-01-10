import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent implements OnInit {

  // Variables
  day?: number;

  // Método para convertir el valor a número
  convertToNumber(value: string): number {
    return parseInt(value, 10);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
