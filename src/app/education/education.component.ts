import { Component, OnInit } from "@angular/core";
import { Education } from "../education";
import { EDUCATIONS } from "../mock-educations";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  //gevuld met mock-data uit mock-educations
  
  educations = EDUCATIONS;

  constructor() {}

  ngOnInit() {}
}
