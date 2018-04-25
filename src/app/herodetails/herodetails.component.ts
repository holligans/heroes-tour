import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-herodetails",
  templateUrl: "./herodetails.component.html",
  styleUrls: ["./herodetails.component.css"]
})
export class HerodetailsComponent implements OnInit {
  @Input() hero: Hero;
  constructor() {}

  ngOnInit() {}
}
