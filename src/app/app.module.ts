import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {HaftungsausschlussComponent} from './haftungsausschluss/haftungsausschluss.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import { GiHeaderComponent } from './gi-header/gi-header.component';
import { GiFooterComponent } from './gi-footer/gi-footer.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { PortaitComponent } from './portait/portait.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { DownloadFolderComponent } from './download-folder/download-folder.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KontaktComponent,
    ImpressumComponent,
    HaftungsausschlussComponent,
    DatenschutzComponent,
    GiHeaderComponent,
    GiFooterComponent,
    UeberUnsComponent,
    PortaitComponent,
    ProjekteComponent,
    DownloadFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
