import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { Porto } from '../models/porto.model';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  listPorto: Porto[] = [{
    title: "Sales Tools",
    description: "Microservices Application  at PT. Bank Mandiri (Persero).",
    img: "../../assets/img/portofolios/salestools.png"
  },{
    title: "Monitoring Stock",
    description: "Microservices Application For Client from Riyadh.",
    img: "../../assets/img/portofolios/pi.png"
  }, {
    title: "RMTN",
    description: "Microservices Application at PT. Bank Mandiri (Persero).",
    img: "../../assets/img/portofolios/rmt.png"
  }, {
    title: "Sribu Website Test Design",
    description: "Website design for Sribu test when first sign up.",
    img: "../../assets/img/portofolios/sribu.png"
    }, {
      title: "Training Material",
      description: "Training Material Website for trainee in Enigma Camp.",
      img: "../../assets/img/portofolios/training-material.jpg"
    }, {
      title: "Tutorial Blog",
      description: "Personal blog to posting some tutorial that i've made.",
      img: "../../assets/img/portofolios/blog.png"
    },  ]

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
