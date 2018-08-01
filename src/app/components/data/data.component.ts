import { Component } from '@angular/core';

// Importaciones básicas para trabajar con la aproximación por data
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  // Responsable del formulario de tipo FormGroup
  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Virginia',
      apellido: 'Sánchez'
    },
    email: 'v.sanchez.rod@gmail.com'
  };

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  }

  guardarCambios() {
    console.log('FORMA', this.forma);
    console.log('VALUES', this.forma.value);

  }

}
