import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DivComponent } from './div/div.component';
import { FooterComponent } from './footer/footer.component';
import { Div1Component } from './div1/div1.component';
import { Div2Component } from './div2/div2.component';
import { Div3Component } from './div3/div3.component';
import { Div4Component } from './div4/div4.component';
import { Div5Component } from './div5/div5.component';
import { Div6Component } from './div6/div6.component';
import { HeaderComponent } from './header/header.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DivComponent,
    FooterComponent,
    Div1Component,
    Div2Component,
    Div3Component,
    Div4Component,
    Div5Component,
    Div6Component,
    HeaderComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
