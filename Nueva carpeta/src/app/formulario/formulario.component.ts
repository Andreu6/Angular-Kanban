import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent {

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();

 /*  taskForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  }); */

  titulo = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.titulo.hasError('required')) {
      return 'You must enter a value';
    }

    return this.titulo.hasError('email') ? 'Not a valid email' : '';
  }

  /* onSubmit() {
    if (!this.taskForm.valid) {

    }
    else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
    }

  } */
}

/* export class FormularioComponent {
  titulo = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.titulo.hasError('required')) {
      return 'You must enter a value';
    }

    return this.titulo.hasError('email') ? 'Not a valid email' : '';
  }
} */