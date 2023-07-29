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
      route: 'panel',
      text: 'Panel'
    },
    {
      route: 'usuario',
      text: 'Usuario'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
