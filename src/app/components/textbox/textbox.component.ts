import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input()
  type: string = 'text';

  @Input()
  label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
