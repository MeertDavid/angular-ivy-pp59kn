import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

 // scrollen naar het element op de pagina op basis van het element ID
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    console.log(id);

    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  constructor() { }

  ngOnInit() {
  }

}