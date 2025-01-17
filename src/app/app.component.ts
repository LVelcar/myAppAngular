import { Component } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent,
      BotonesComponent,
      BuclesComponent, 
      FormularioComponent,
      SwitchComponent,
      Formulario2Component,
      Formulario3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
}
