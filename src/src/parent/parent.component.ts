import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: ` Parent Works
  <app-child [message]="parentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage = 'This is parent message';

  constructor() { }

  ngOnInit() {
  }

}