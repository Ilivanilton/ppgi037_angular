import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesPublicService } from './services/clientes-public.service';
import { SliderButtonComponent } from './components/slider-button/slider-button.component';



@NgModule({
  declarations: [SliderButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderButtonComponent,
    CommonModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [
        ClientesPublicService
      ]
    }
  }
}
