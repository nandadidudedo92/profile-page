import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    // Wrap every letter in a span
    const textWrapper = document.querySelector('.boxs')!;
    const newLocal = textWrapper.textContent!;
    textWrapper.innerHTML = newLocal.replace(/\S/g, "<div class='boxs'>$&</div>");

    anime.timeline({ loop: true })
      .add({
        targets: '.boxs',
        opacity: [0, 1],
        easing: "easeInOutExpo",
        translateY: [-100, 0],
        duration: 1000,
        delay: (el: any, i: number) => 150 * (i + 1)
      }).add({
        targets: '.boxs',
        opacity: 0,
        duration: 1000,
        easing: "easeOutCirc",
        delay: 300
      });
  }
}


