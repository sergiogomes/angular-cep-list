import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: Array<Client>;
  constructor(private clientService: ClientService) {
    this.clientService.clients.push({
      name: "Pow",
      age: 26,
      value: 3300,
      date: "2018-12-31"
    });

    this.clients = this.clientService.clients;
  }

  ngOnInit() {}
}
