import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.component.html',
  styleUrls: ['./actividad2.component.scss'],
})
export class Actividad2Component implements OnInit {
  formGroup!: FormGroup;
  envio = false;
  todasLasRespuestasSeleccionadas = false;
  preguntas = [
    {
      numero: 'A.',
      pregunta: '¿Cuánto es 2+2?',
      opciones: ['1', '2', '3', '4'],
      respuestaCorrecta: '4',
      mensajeError: '2+2 es igual a 4',
    },
    {
      numero: 'B.',
      pregunta: '¿Cuánto es 4+6?',
      opciones: ['15', '10', '6', '8'],
      respuestaCorrecta: '10',
      mensajeError: '4+6 es igual a 10',
    },
    {
      numero: 'C.',
      pregunta: '¿Cuánto es 3+2?',
      opciones: ['0', '7', '9', '5'],
      respuestaCorrecta: '5',
      mensajeError: '3+2 es igual a 5',
    },
    {
      numero: 'D.',
      pregunta: '¿Cuánto es 7+1?',
      opciones: ['9', '4', '8', '5'],
      respuestaCorrecta: '8',
      mensajeError: '7+1 es igual a 8',
    },
  ];
  mostrarRespuesta: boolean[] = new Array(this.preguntas.length).fill(false);
  mensajes: string[] = new Array(this.preguntas.length);
  respuestas: any = {};
  respuestasCorrectas: boolean[] = new Array(this.preguntas.length).fill(false);
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      respuesta: new FormControl(),
    });
  }
  enviarRespuestas() {
    for (let i = 0; i < this.preguntas.length; i++) {
      const pregunta = this.preguntas[i];
      const preguntaKey = 'pregunta' + i;

      if (this.respuestas[preguntaKey] === pregunta.respuestaCorrecta) {
        this.mensajes[i] = '✅   Bien Hecho';
        this.envio = true;
        this.respuestasCorrectas[i] = true;
        this.todasLasRespuestasSeleccionadas = false;
      return;
      } else {
        this.mensajes[i] = '❌   Respuesta incorrecta';
        this.envio = true;
        this.respuestasCorrectas[i] = false;
      }
    }
    this.todasLasRespuestasSeleccionadas = true;
  }

  visible: boolean = false;

  showDialog(index: number) {
    this.mostrarRespuesta[index] = true;
  }
  cerrarModal(index: number) {
    this.mostrarRespuesta[index] = false;
  }
}
