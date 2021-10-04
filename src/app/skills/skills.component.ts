import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs/internal/observable/interval';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  min = -100;
  max = 100;
  trans = Math.floor(Math.random() * (this.max - this.min) + this.min);


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
        translateY: [this.trans, 0],
        translateX: [this.trans, 0],
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


