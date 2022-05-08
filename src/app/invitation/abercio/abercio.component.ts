import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abercio',
  templateUrl: './abercio.component.html',
  styleUrls: ['./abercio.component.css']
})
export class AbercioComponent implements OnInit {

  enter: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
    
   
  }


  open() {
    this.enter = true;
  }
}
