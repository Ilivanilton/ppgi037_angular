import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ScreamerService } from './services/screamer.service';
import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { CreateAccountComponent } from './authentication/components/create-account/create-account.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule,
      providers:[
        ScreamerService,
      ]
    }
  }
}
