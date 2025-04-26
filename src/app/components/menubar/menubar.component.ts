import { Component } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  protected enableNavbar : boolean = false
  protected logoImage : string= './assets/icons/t.png';
  protected titleImage : string= 'LEANING ABOUT BASIC PWA';
  protected routersLink : {path: string,label : string} []= [
    { path : 'universities-table' , label : 'Table' },
  ];
}
