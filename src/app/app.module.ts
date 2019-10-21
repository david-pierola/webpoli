import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HeaderMenuComponent } from "./menu/header-menu/header-menu.component";
import { LeftMenuComponent } from "./menu/left-menu/left-menu.component";
import { GeneralInformationComponent } from "./modules/unique-form/general-information/general-information.component";
import { HomeComponent } from "./modules/home/home.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueFormComponent } from "./modules/unique-form/unique-form/unique-form.component";
import { WhistleblowerComponent } from "./modules/unique-form/whistleblower/whistleblower.component";
import { VictimComponent } from "./modules/unique-form/victim/victim.component";
import { DenouncedComponent } from "./modules/unique-form/denounced/denounced.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderMenuComponent,
    LeftMenuComponent,
    HomeComponent,
    GeneralInformationComponent,
    UniqueFormComponent,
    WhistleblowerComponent,
    VictimComponent,
    DenouncedComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
