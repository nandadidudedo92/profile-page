import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(event: any, elem: { offsetHeight: any; }) {
    console.log(elem.offsetHeight);
  }

}
