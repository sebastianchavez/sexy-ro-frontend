import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: {
    route: string;
    text: string;
    dropdown?: {
      route: string;
      text: string;
    }[]
  }[] = [
    {
      route: '',
      text: 'Información'
    },
    {
      route: 'descargas',
      text: 'Descargas'
    },
    {
      route: '',
      text: 'Panel',
      dropdown: [
        {
          text: 'Mis cuentas',
          route: 'panel/mis-cuentas'
        }
      ]
    },
    {
      route: 'usuario',
      text: 'Usuario'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
