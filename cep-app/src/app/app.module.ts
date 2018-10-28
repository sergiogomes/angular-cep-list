import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClientsComponent } from "./clients/clients.component";
import { FormatCurrencyPipe } from "./format-currency.pipe";
import { FormatDatePipe } from "./format-date.pipe";
import { MyClientsDirective } from "./my-clients.directive";
import { NewClientComponent } from "./new-client/new-client.component";
import { ClientService } from "./client.service";

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyClientsDirective,
    NewClientComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
