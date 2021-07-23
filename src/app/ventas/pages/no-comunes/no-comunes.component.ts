import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
    nombre: string = 'Carlos';
    genero: string = 'masculino';
    invitacionMapa = {
      'masculino' : 'invitarlo',
      'femenino' : 'invitarla'
    }

    //i18nPlural
    clientes: string[] = ['Maria','Carlos','Juan', 'Jude'];
    clientesMapa = {
      '=0':'No tenemos ningun cliente esperando.',
      '=1':'Tenemos 1 cliente esperando.',
      '=2':'Tenemos 2 clientes esperando.',
      'other':'Tenemos # clientes esperando.',
    }

    cambiarCliente(){
      this.nombre = 'Melissa';
      this.genero = 'femenino';
    }

    borrarCliente(){
      this.clientes.pop();
    }

    //KEYVALUE PIPE
    persona = {
      nombre: 'Carlos',
      edad: 35,
      direccion: 'Hermosillo, Mexico'
    }

    //JSON PIPE
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      },
    ];

    //Async Pipe
    miObservable = interval(5000);

    valorPromesa = new Promise(( resolve, reject ) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa')
      }, 3500 );
    });
}
