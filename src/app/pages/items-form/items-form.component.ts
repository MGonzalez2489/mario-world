import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'mario-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss'],
})
export class ItemsFormComponent implements OnInit {
  itemForm = new FormGroup({
    titleCtrl: new FormControl([Validators.required, Validators.minLength(3)]),
    descriptionCtrl: new FormControl([
      Validators.required,
      Validators.maxLength(50),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}
}
/* formulario
 >> Lo que debe de tener
  1.- Submit function: es la funcion resultante del formulario (BP)
  2.- Cancel function: es la funcion de cancelar la accion de uso del formulario (BP)
  3.- Validaciones: el formulario es la parte donde se introduce o actualiza informacion
      por lo tanto: debe de ser confiable cuando pase del formulario (BP)
  4.- AYUDA E INFORMACION VISUAL: el usuario debe de ser informado porque su formulario es
      valido/invalido y que parte del formulario es valido/invalido (CP)

  >> Partes de un formulario

  1.- Contenedor (cp)
  2.- INPUTS: (REQUIRED)
  3.- botones de accion (REQUIRED)

*/
