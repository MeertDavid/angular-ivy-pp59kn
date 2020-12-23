import { Component, OnInit } from "@angular/core";
import { Experience } from "../experience";
import { EXPERIENCES } from "../mock-experiences";
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  experiences = EXPERIENCES;

  constructor() {}

  ngOnInit() {}
}
