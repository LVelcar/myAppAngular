import { Component } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-root',
  imports: [ContadorComponent,
     BotonesComponent,
     BuclesComponent, 
     FormularioComponent,
     SwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
}
