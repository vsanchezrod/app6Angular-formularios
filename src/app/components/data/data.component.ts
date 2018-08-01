import { Component } from '@angular/core';

// Importaciones básicas para trabajar con la aproximación por data
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


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
    email: 'v.sanchez.rod@gmail.com',
    pasatiempos: ['Correr']
  };

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido': new FormControl('', [Validators.required, this.noSanchez])
      }),
      'email': new FormControl('' , [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('')

    });

    // Para cargar los datos de un usuario en el formulario. Eobjeto a cargar debe tener la misma estructura que la forma
    // this.forma.setValue(this.usuario);

    // Validación del password
    // Cuando se ejecutar la función, está en otro contexto y el this no existe x eso es necesario usar el bind para decirle q será this
    this.forma.controls['password2'].setValidators([Validators.required, this.validarPassword.bind(this.forma)]);

    // Se crea un observador que esté pendiente de cualquier cambio en el formulario
    /*this.forma.valueChanges.subscribe( data => {
      console.log(data);
    });*/

    // Se puede crear un observador que sólo esté pendiente de un sólo control
    this.forma.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
    });

    // Podemos subscribirnos para ver el estado del control
    this.forma.controls['username'].statusChanges.subscribe( data => {
      console.log(data);
    });

  }

  guardarCambios() {
    console.log('FORMA', this.forma);
    console.log('VALUES', this.forma.value);

    // Para resetear los cambios y volver a tener la clase ng-pristine
    // 1ºForma - Resetea a los valores por defecto del objeto usuario
    // this.forma.reset(this.usuario);

    // 2ºForma - Resetea a vacío
    /*this.forma.reset({
      nombreCompleto: {
        nombre: '',
        apellido: ''
      },
      email: ''
    });*/

  }

  agregarPasatiempo() {

    // Con <FormArray> se le dice a Typescript q es un array y así puede usar los métodos de los arrays.
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }


  // VALIDACIONES: Lo ideal es tener un archivo de validaciones aparte

  // Ejemplo de validacion para que no pueda ser Sanchez el apellido
  noSanchez(control: FormControl): {[s: string]: boolean} {

    if (control.value === 'sanchez') {
      // Si devuelve algo, es que la validación falla
      return {
        noSanchez: true
      };
    }

    // Si no devuelve nada, la validación no falla
    return null;

  }

  // Validación passwords
  validarPassword(control: FormControl): {[s: string]: boolean} {

    // El this aquí es igual a this.forma (por el uso de bind())
    let forma: any = this;

    // Se va a colocar en el segundo control de password
    if (control.value !== forma.controls['password1'].value) {
      // Si devuelve algo, es que la validación falla
      return {
        passwordDistintos: true
      };
    }
    return null;
  }

  // Validación asíncrona
  existeUsuario(control: FormControl): Promise<any>|Observable<any> {

  let promesa = new Promise(
    (resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'Virginia') {
          resolve({existe: true});
        }
        else {
          resolve(null);
        }


      }, 3000);
    }
  );

  return promesa;
 }

}

