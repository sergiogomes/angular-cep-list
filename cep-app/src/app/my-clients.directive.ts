import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Client } from "./client";

@Directive({
  selector: "[appMyClients]"
})
export class MyClientsDirective {
  private _appMyClients: Client;

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML = "Content added";
  }

  get appMyClients() {
    return this._appMyClients;
  }

  @Input()
  set appMyClients(value: Client) {
    this._appMyClients = value;
    this.changeColorClient();
  }

  @HostListener("click")
  onclick() {
    alert(this.appMyClients);
  }

  changeColorClient() {
    this.el.nativeElement.style.color =
      this.appMyClients.value > 30 ? "green" : "red";
  }
}
