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

  constructor() {

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  }

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);

  }
  
}
