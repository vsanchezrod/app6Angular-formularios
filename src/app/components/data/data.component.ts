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
      'nombre': new FormControl('Fernando'),
      'apellido': new FormControl(),
      'email': new FormControl()
    });
  }

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);

  }

}
