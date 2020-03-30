import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menus: Array<MenuItem>;
  
  constructor() { }

  ngOnInit() {
  }

}
