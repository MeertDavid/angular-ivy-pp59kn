import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  // scrollen naar het element op de pagina op basis van het element ID
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    console.log(id);

    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  constructor() {}

  ngOnInit() {}
}
