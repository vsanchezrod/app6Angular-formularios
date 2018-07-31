import { Component } from '@angular/core';

// Se importa NgForm para poner que lo que recibe el método guardar es de tipo NgForm
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    /* Ahora se hace con clases de bootstrap
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }*/

  `]
})
export class TemplateComponent {

  // Usuario con valores por defecto
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Sin definir',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];

  sexos: String[] = ['Mujer', 'Hombre', 'Sin definir'];

  constructor() { }

  // Función se que va a llamar en el submit del formulario
  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log('ngForm' , forma);

    // Valor que se está mandando
    console.log('Valor forma' , forma.value);

    console.log('Usuario', this.usuario);
  }

}
