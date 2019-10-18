import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HeaderMenuComponent } from './menu/header-menu/header-menu.component';
import { LeftMenuComponent } from './menu/left-menu/left-menu.component';
import { HomeComponent } from './home/home.component';
import { GeneralInformationComponent } from './unique-form/general-information/general-information.component';
import { HomeComponent } from "./modules/home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, HeaderMenuComponent,
    LeftMenuComponent,
    HomeComponent,
    GeneralInformationComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
