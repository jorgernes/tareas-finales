import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DivcontenedorComponent } from './divcontenedor/divcontenedor.component';
import { DivPatrocinioComponent } from './div-patrocinio/div-patrocinio.component';
import { DivFooterComponent } from './div-footer/div-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DivcontenedorComponent,
    DivPatrocinioComponent,
    DivFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
