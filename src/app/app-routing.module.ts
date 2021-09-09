import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then( m => m.DashboardModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {path: 'clientes',
    loadChildren: () => import('./modules/clientes/clientes.module')
      .then( m => m.ClientesModule ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {path: 'clean',
    loadChildren: () => import('./modules/clean-architecture/clean-architecture.module')
      .then( m => m.CleanArchitectureModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
