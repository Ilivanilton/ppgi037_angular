import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientesRoutingModule } from './clientes-routing.module';
import { IndexComponent } from './components/cliente-index/cliente-index.component';
import { DetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';


@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    ClienteEditComponent,
    ClienteCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
