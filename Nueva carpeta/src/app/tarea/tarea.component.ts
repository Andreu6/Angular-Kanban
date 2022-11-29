import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  Tarea
} from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tareas: Tarea;

  constructor() {
    this.tareas = {};
  }
  ngOnInit(): void {}


  fechas(fechaFin: Date) {

    let fechaActual = new Date;
    let fecha = new Date(fechaFin)
    let fechaNaranja = new Date(fechaActual.setDate(fechaActual.getDate() + 1))

    if (fechaNaranja.getUTCDate() == fecha.getUTCDate() && fechaNaranja.getUTCFullYear() == fecha.getUTCFullYear() &&
      fecha.getUTCMonth() == fechaNaranja.getUTCMonth() && this.tareas.lista != "Finalizadas") {
      return "naranja"

    } else if (fechaActual > fecha && this.tareas.lista != "Finalizadas") {
      return "rojo"

    } else if (fechaActual > fecha && this.tareas.lista == "Finalizadas") {
      return "verde"

    } else {
      return "gris"
    }
  }

}
