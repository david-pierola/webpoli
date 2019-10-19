import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { UniqueFormComponent } from "./modules/unique-form/unique-form/unique-form.component";

const routes: Routes = [{ path: "", component: HomeComponent }, { path: "uniqueform", component: UniqueFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
