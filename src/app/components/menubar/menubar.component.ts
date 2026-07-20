import {Component} from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  protected readonly logoImage: string = './assets/icons/t.png';
  protected readonly titleImage: string = 'LEANING ABOUT BASIC PWA';
  protected readonly routersLink: { path: string, label: string } [] = [
    {path: 'universities-table', label: 'Table'},
  ];
  protected enableNavbar : boolean = false
}
