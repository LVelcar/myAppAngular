import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})

export class Formulario3Component implements OnInit {

  // Variables
  get name() { return this.formUser.get('name') as FormControl; }
  get email() { return this.formUser.get('email') as FormControl; }

  formUser = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
  });
  // name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  // Método para enviar el formulario
  onSubmit() {
    console.log(this.formUser.value);
  }

}
