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
    titleCtrl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    descriptionCtrl: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
  });
  isSubmited: boolean;

  constructor() {}

  ngOnInit(): void {}

  miSubmitFunction() {
    this.isSubmited = true;
    if (this.itemForm.valid) {
      //llama al server y manda informacion
      alert('formulario valido yahooooo!');
    }
  }
}
