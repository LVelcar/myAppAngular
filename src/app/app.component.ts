import { Component } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, BotonesComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
}
