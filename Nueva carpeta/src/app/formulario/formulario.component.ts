import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent {

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();

  taskForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    lista: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    url: new FormControl('')
  });


  getErrorMessageTitulo() {
    if (this.taskForm.controls.titulo.hasError('required')) {
      return 'El titulo es obligatorio';
    }

    return this.taskForm.controls.titulo.hasError('required');
  }

  getErrorMessageLista() {
        if (this.taskForm.controls.lista.hasError('required')) {
      return 'El estado es obligatorio';
        }
      return this.taskForm.controls.lista.hasError('required');
  }



  onSubmit() {
    if (!this.taskForm.valid) {

    }
    else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
    }

  }
}