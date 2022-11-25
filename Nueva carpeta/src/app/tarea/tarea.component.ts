import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';
import * as moment from 'moment';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  nom1 = moment("2022-11-09").format('YYYY-MM-DD');


  @Input() tareas: Tarea;

  constructor() { 
    this.tareas = {};
  }
  ngOnInit(): void {
  }

fecha(tareas:any){

}

}
