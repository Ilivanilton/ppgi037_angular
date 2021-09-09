import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
//import { ClienteInMemoryDataService } from './modules/clientes/cliente-in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    //HttpClientInMemoryWebApiModule.forRoot(ClienteInMemoryDataService),
    AppRoutingModule,
    SharedModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
