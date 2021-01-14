import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.an-2')!;
    const newLocal = textWrapper.textContent!;
    textWrapper.innerHTML = newLocal.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.an-2 .letter',
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 300,
        delay: (el: any, i: number) => 100 * (i + 1)
      }).add({
        targets: '.an-2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutCirc",
        delay: 1000
      });
  }


}
