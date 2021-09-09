import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { IndexComponent } from './components/cliente-index/cliente-index.component';
import { DetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: '', component: IndexComponent},
      {path: 'create', component: ClienteCreateComponent},
      {path: ':id', component: DetailComponent},
      {path: ':id/edit', component: ClienteEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
