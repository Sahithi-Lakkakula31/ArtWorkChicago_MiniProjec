import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { MyModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtsComponent } from './arts/arts.component';
import { SingleartComponent } from './singleart/singleart.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { SearchComponent } from './search/search.component';
import { WhistlistComponent } from './whistlist/whistlist.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtsComponent,
    SingleartComponent,
    TopbarComponent,
    ViewdetailsComponent,
    SearchComponent,
    WhistlistComponent,
    DocumentationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
