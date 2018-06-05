import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>We are in Child Component</div>
  {{message}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}