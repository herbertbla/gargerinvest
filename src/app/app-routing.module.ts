import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {HaftungsausschlussComponent} from "./haftungsausschluss/haftungsausschluss.component";
import {DatenschutzComponent} from "./datenschutz/datenschutz.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kontakt', component:  KontaktComponent },
  { path: 'impressum', component:  ImpressumComponent },
  { path: 'haftungsausschluss', component:  HaftungsausschlussComponent},
  { path: 'datenschutz', component:  DatenschutzComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
