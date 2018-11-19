import { Component, OnInit } from "@angular/core";
import { CepService } from "../cep.service";
import { Cep } from "../cep";

@Component({
  selector: "app-cep",
  templateUrl: "./cep.component.html",
  styleUrls: ["./cep.component.css"]
})
export class CepComponent implements OnInit {
  cep = new Cep();
  constructor(private cepService: CepService) {}

  ngOnInit() {}

  getLocation() {
    this.cepService
      .getLocation(this.cep.cep)
      .then((cep: Cep) => (this.cep = cep))
      .catch(() => alert("Não foi possível buscar o cep!"));
  }
}
