import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input()
  type: string = 'text';

  @Input()
  label: string;

  @Input()
  value: string;

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  valueChangeExec() {
    this.valueChange.emit(this.value)
  }
}
