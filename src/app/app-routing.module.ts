import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {HaftungsausschlussComponent} from "./haftungsausschluss/haftungsausschluss.component";
import {DatenschutzComponent} from "./datenschutz/datenschutz.component";
import {UeberUnsComponent} from "./ueber-uns/ueber-uns.component";
import {PortaitComponent} from "./portait/portait.component";
import {ProjekteComponent} from "./projekte/projekte.component";
import {InvestGrundComponent} from "./invest-grund/invest-grund.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kontakt', component:  KontaktComponent },
  { path: 'ueberuns', component:  UeberUnsComponent },
  { path: 'portrait', component:  PortaitComponent },
  { path: 'projekte', component:  ProjekteComponent },
  { path: 'impressum', component:  ImpressumComponent },
  { path: 'haftungsausschluss', component:  HaftungsausschlussComponent},
  { path: 'datenschutz', component:  DatenschutzComponent},
  { path: 'investgrund', component:  InvestGrundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
