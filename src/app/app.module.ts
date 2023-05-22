import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { personComponent } from './home/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { parentComponent } from './parent.component'
import { childComponent } from './child-component'
// import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    personComponent,
    ListPersonComponent,
    parentComponent,
    childComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
