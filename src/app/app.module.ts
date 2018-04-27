import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeroService } from "./hero.service";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HerodetailsComponent } from "./herodetails/herodetails.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./messages.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HerodetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
