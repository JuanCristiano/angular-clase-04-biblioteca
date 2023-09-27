import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarios = [
    {
      nombre: 'Juan',
      apellido: 'Cristiano',
      documento: '12345678',
      carrera: 'Informática',
      fechaAlta: '15/01/2023',
    },
    {
      nombre: 'Lucia',
      apellido: 'Gimenez',
      documento: '98765432',
      carrera: 'Arquitectura',
      fechaAlta: '05/02/2023',
    },
    {
      nombre: 'María',
      apellido: 'Rivas',
      documento: '98765432',
      carrera: 'Ingenieria',
      fechaAlta: '05/12/2022',
    },
    {
      nombre: 'Esteban',
      apellido: 'Gómez',
      documento: '987655762',
      carrera: 'Criminolistica',
      fechaAlta: '09/03/2020',
    },
    {
      nombre: 'Miranda',
      apellido: 'Barron',
      documento: '98776432',
      carrera: 'Derecho',
      fechaAlta: '15/04/20',
    },    
  ];
}
