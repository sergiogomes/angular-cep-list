import { Injectable } from "@angular/core";
import { Client } from "./client";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  clients: Array<Client> = [];
  constructor() {}
}
