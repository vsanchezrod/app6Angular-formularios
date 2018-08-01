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

  usuario: any = {
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
      'email': new FormControl('' , [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });

    // Para cargar los datos de un usuario en el formulario
    // El objeto a cargar debe tener la misma estructura que la forma
    this.forma.setValue(this.usuario);

  }

  guardarCambios() {
    console.log('FORMA', this.forma);
    console.log('VALUES', this.forma.value);

    // Para resetear los cambios y volver a tener la clase ng-pristine
    // 1ºForma - Resetea a los valores por defecto del objeto usuario
    // this.forma.reset(this.usuario);

    // 2ºForma - Resetea a vacío
    this.forma.reset({
      nombreCompleto: {
        nombre: '',
        apellido: ''
      },
      email: ''
    });

  }

}
