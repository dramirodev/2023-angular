import { Component } from '@angular/core';


interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
public reactiveMenu: MenuItem[] =[
  {title: 'Básicos', route: '/reactive/basic'},
  {title: 'Dinámicos', route: '/reactive/dynamic'},
  {title: 'Switches', route: '/reactive/switches'}
];

  public authMenu: MenuItem[] =[
    {title: 'Registro', route: '/auth/register'},
  ];
}
