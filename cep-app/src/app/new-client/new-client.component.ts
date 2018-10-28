import { Component, OnInit, Input } from "@angular/core";
import { Client } from "../client";
import { ClientService } from "../client.service";

@Component({
  selector: "app-new-client",
  templateUrl: "./new-client.component.html",
  styleUrls: ["./new-client.component.css"]
})
export class NewClientComponent implements OnInit {
  client: Client = {
    name: "",
    age: 0,
    value: 0,
    date: "2018-12-31"
  };
  clients: Array<Client>;

  addClient() {
    // Creates a new object every time.
    let cli = Object.assign({}, this.client);
    this.clients.push(cli);
  }

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.clients;
  }

  ngOnInit() {}
}
