import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.css']
})
export class HeaderRightComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scroll() {
    this.router.navigate(['/portofolios'], { fragment: 'portofolios' });
  }

}
