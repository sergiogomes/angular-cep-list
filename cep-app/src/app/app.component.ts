import { Component } from "@angular/core";
import { Client } from "./client";
import { ClientService } from "./client.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular CEP";
  clients: Array<Client>;

  // constructor() {
  //   let clientService = new ClientService();
  //   this.clients = clientService.clients;
  //   this.clients.push({
  //     name: "Pow",
  //     age: 26,
  //     value: 3300,
  //     date: "2018-12-31"
  //   });
  // }
}
