import { Component } from '@angular/core';

// Se importa NgForm para poner que lo que recibe el método guardar es de tipo NgForm
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    /*.ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }*/

  `]
})
export class TemplateComponent {

  // Usuario con valores por defecto
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null
  };

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
