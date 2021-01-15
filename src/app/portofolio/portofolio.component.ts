import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onMouseOver(event: any, elem: { offsetHeight: any; }) {
    console.log(elem.offsetHeight);
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.geser')!;
    const newLocal = textWrapper.textContent!;
    textWrapper.innerHTML = newLocal.replace(/\S/g, "<div class='geser'>$&</div>");

    anime.timeline({ loop: false })
      .add({
        targets: '.geser',
        opacity: [0, 1],
        easing: "easeInOutExpo",
        translateY: [Math.random() * (500 - -500) + -500, 0],
        translateX: [Math.random() * (500 - -500) + -500, 0],
        duration: 100,
        delay: (el: any, i: number) => 150 * (i + 1)
      });
  }
}
