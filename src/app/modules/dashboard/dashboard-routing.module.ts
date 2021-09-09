import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { IndexComponent } from './components/dashboard-index/dashboard-index.component';

const routes: Routes = [
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
