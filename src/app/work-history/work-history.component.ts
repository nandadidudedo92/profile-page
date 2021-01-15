import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  onMouseOver(event: any, elem: { offsetHeight: any; }) {
    console.log(elem.offsetHeight);
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.boxss')!;
    const newLocal = textWrapper.textContent!;
    textWrapper.innerHTML = newLocal.replace(/\S/g, "<div class='boxss'>$&</div>");

    anime.timeline({ loop: false })
      .add({
        targets: '.boxss',
        opacity: [0, 1],
        easing: "easeInOutExpo",
        translateY: [Math.random() * (500 - -500) + -500, 0],
        translateX: [Math.random() * (500 - -500) + -500, 0],
        duration: 100,

        delay: (el: any, i: number) => 150 * (i + 1)
      });
  }



}

