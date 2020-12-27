import { Component, OnInit } from "@angular/core";

import { PERSONALDATAS } from "../mock-personaldata";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  personaldatas = PERSONALDATAS[0];

  constructor() {}

  ngOnInit() {}
}
