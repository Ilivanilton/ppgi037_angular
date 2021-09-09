import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CleanArchitectureRoutingModule } from './clean-architecture-routing.module';
import { IndexComponent } from './components/index/index.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CleanArchitectureRoutingModule,
  ]
})
export class CleanArchitectureModule { }
