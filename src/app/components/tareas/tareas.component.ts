import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void {
    this.cargarTareas();
  }


  cargarTareas(): void {
    if(localStorage.getItem('tasks')!==null){
      this.listTareas = JSON.parse(localStorage.getItem('tasks') ||'')
    }
  }

  agregarTarea() {
    //create a new task object
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    //add the object to the listTareas array
    this.listTareas.push(tarea);
    localStorage.setItem("tasks",JSON.stringify(this.listTareas));

    //reset the input field
    this.nombreTarea = '';
  }
  eliminarTarea(i: number): void {
    //delete the element from the listTareas array
    this.listTareas.splice(i, 1);
    localStorage.setItem("tasks",JSON.stringify(this.listTareas));
  }

  actualizarTarea(tarea: Tarea, i: number): void {
    this.listTareas[i].estado = !tarea.estado;
    localStorage.setItem("tasks",JSON.stringify(this.listTareas));
  }
}
