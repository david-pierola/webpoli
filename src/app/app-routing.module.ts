import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInformationComponent } from './unique-form/general-information/general-information.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'uniqueform', component: GeneralInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
